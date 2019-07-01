<?php

namespace App\Console\Commands;

use Goutte\Client;
use Illuminate\Console\Command;

class getWangyi extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'get:wangyi';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
        $url = 'https://www.163.com';
        $client = new Client();
        $crawler = $client->request('GET', $url);
        $crawler->filter('.tab_panel.local_tab_news.show_local_tab.current')->each(function ($node) {
            print $node->text();
        });
    }
}
