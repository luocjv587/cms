<?php

namespace App\Console\Commands;

use Goutte\Client;
use Illuminate\Console\Command;

class getDouban extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'get:douban';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '获取豆瓣数据';

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
        $url = 'https://m.douban.com/rexxar/api/v2/gallery/topic/81357/items?sort=hot&start=0&count=20&status_full_text=1&guest_only=0&ck=null';

//        $url = 'https://www.douban.com/gallery/';
        $client = new Client();
        $crawler = $client->request('GET', $url, [
            'headers' => [
                'Accept' => 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding' => 'gzip, deflate',
                'Accept-Language' => 'zh-CN,zh;q=0.8',
                'Cache-Control' => 'max-age=0',
                'Connection' => 'keep-alive',
                'Host' => 'www.douban.com',
                'Upgrade-Insecure-Requests' => '1'
            ],
        ]);
        dd($crawler);
        $crawler->filter('.trend li')->each(function ($node) {
            $text = trim($node->children()->text());
            $href = $node->children()->attr('href');
//            $url = $node->children()->children()->attr('href');
            echo $text . "\r\n";
            echo $href . "\r\n";
        });
    }
}
