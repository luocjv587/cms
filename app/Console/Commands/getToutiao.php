<?php

namespace App\Console\Commands;

use Goutte\Client;
use Illuminate\Console\Command;

class getToutiao extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'get:tou_tiao';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '获取今日头条数据';

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
        $url = 'https://www.toutiao.com/';
        $client = new Client();
        $crawler = $client->request('GET', $url);
        dd($crawler);
        $crawler->filter('.channel.channel-fixed')->each(function ($node) {
            var_dump($node->text());
        });
    }
}
