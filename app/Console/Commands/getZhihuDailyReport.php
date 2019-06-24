<?php

namespace App\Console\Commands;

use App\Article;
use App\Category;
use App\Tag;
use Goutte\Client;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use League\HTMLToMarkdown\HtmlConverter;

class getZhihuDailyReport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'get:zhi_hu_daily_report';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '获取知乎日志每日数据';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $url = 'https://daily.zhihu.com';

        //获取指定分类和标签
        $category = $this->getCategory();
        $tag = $this->getTag();

        $converter = new HtmlConverter();

        $client = new Client();
        $crawler = $client->request('GET', $url);
        $crawler->filter('.box')->each(function ($node) use ($url, $category, $tag, $converter) {
            //获取标题
            $href = $node->children()->attr('href');
            $img = $node->children()->children()->attr('src');
            $text = $node->text();
            //如果标题存在则跳过
            if (!Article::where('title', $text)->exists()) {
                //获取文章内容
                $detail_url = $url . $href;
                $detail_client = new Client();
                $detail_crawler = $detail_client->request('GET', $detail_url);
                $detail_title = $detail_crawler->filter('.question-title')->text();
                $detail_answer_html = $detail_crawler->filter('.content')->html();
                $detail_answer_text = $detail_crawler->filter('.content')->text();
                $detail_answer_markdown = $converter->convert($detail_answer_html);
                //额外处理<figure> 和 <figcaption> 标签
                $detail_answer_markdown = preg_replace('/\<.*?fig.*?\>/', "\r\n", $detail_answer_markdown);

                try {
                    DB::beginTransaction();
                    $article = new Article();
                    $article->category_id = $category->id;
                    $article->user_id = 1;//默认管理员
                    $article->last_user_id = 1;
                    $article->slug = str_random(6);
                    $article->title = $text;
                    $article->subtitle = $detail_title;
                    $article->content = $detail_answer_markdown;
                    $article->page_image = $img;
                    $article->published_at = date('Y-m-d H:i:s');
                    $article->save();
                    $article->tags()->sync([$tag->id]);

                    DB::commit();
                } catch (\Exception $exception) {
                    DB::rollBack();
                    Log::info('知乎日报保存异常', ['e' => $exception->getMessage()]);
                }
            }


        });
        return 0;
    }

    public function getCategory()
    {
        $category = Category::where('name', '知乎日报')->first();
        if (is_null($category)) {
            $category = Category::create([
                'parent_id' => 0,
                'name' => '知乎日报',
                'path' => '/zhihu_report/',
                'description' => '知乎日报',
            ]);
        }

        return $category;
    }

    public function getTag()
    {
        $tag = Tag::where('tag', '知乎日报')->first();
        if (is_null($tag)) {
            $tag = Tag::create([
                'tag' => '知乎日报',
                'title' => '知乎日报',
                'meta_description' => '知乎日报',
            ]);
        }
        return $tag;
    }


}
