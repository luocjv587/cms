<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class updateFormal extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:formal';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '更新线上代码脚本';

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
        echo shell_exec('ls -la');
//        $target = '/usr/share/nginx/html/blog'; // 生产环境 web 目录
////密钥
//        $secret = "AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==";
////获取 GitHub 发送的内容
//        $json = file_get_contents('php://input');
//        $content = json_decode($json, true);
////github 发送过来的签名
//        $signature = $_SERVER['HTTP_X_HUB_SIGNATURE'];
//        if (!$signature) {
//            return http_response_code(404);
//        }
//        list($algo, $hash) = explode('=', $signature, 2);
////计算签名
//        $payloadHash = hash_hmac($algo, $json, $secret);
//// 判断签名是否匹配
//        if ($hash === $payloadHash) {
//            $cmd = "cd $target && git pull";
//            $res = shell_exec($cmd);
//            $res_log = 'Success:' . PHP_EOL;
//            $res_log .= $content['head_commit']['author']['name'] . ' 在' . date('Y-m-d H:i:s') . '向' . $content['repository']['name'] . '项目的' . $content['ref'] . '分支 push 了' . count($content['commits']) . '个 commit：' . PHP_EOL;
//            $res_log .= $res . PHP_EOL;
//            $res_log .= '=======================================================================' . PHP_EOL;
//            echo $res_log;
//        } else {
//            $res_log = 'Error:' . PHP_EOL;
//            $res_log .= $content['head_commit']['author']['name'] . ' 在' . date('Y-m-d H:i:s') . '向' . $content['repository']['name'] . '项目的' . $content['ref'] . '分支 push 了' . count($content['commits']) . '个 commit：' . PHP_EOL;
//            $res_log .= '密钥不正确不能 pull' . PHP_EOL;
//            $res_log .= '=======================================================================' . PHP_EOL;
//            echo $res_log;
//        }
    }
}
