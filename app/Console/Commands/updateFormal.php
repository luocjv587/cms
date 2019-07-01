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
        $target = '/usr/share/nginx/html/cms'; // 生产环境 web 目录
//密钥
        $secret = 'luocj';
//获取 GitHub 发送的内容
//        $json = file_get_contents('php://input');
//        $content = json_decode($json, true);
        $content = request()->all();
//github 发送过来的签名
        $signature = isset($_SERVER['HTTP_X_HUB_SIGNATURE']) ? $_SERVER['HTTP_X_HUB_SIGNATURE'] : '';
        if (!$signature) {
            echo 'no signature';
            return http_response_code(404);
        }
        $hash = "sha1=" . hash_hmac('sha1', file_get_contents("php://input"), $secret);
// 判断签名是否匹配
        if (strcmp($signature, $hash) == 0) {
            $cmd = "cd $target && git pull";
//            $res = shell_exec($cmd);
            $res = json_encode($this->doShell($cmd));
            $res_log = 'Success:' . PHP_EOL;
            $res_log .= $content['head_commit']['author']['name'] . ' 在' . date('Y-m-d H:i:s') . '向' . $content['repository']['name'] . '项目的' . $content['ref'] . '分支 push 了' . count($content['commits']) . '个 commit：' . PHP_EOL;
            $res_log .= $res . PHP_EOL;
            $res_log .= '=======================================================================' . PHP_EOL;
            echo $res_log;
        } else {
            $res_log = 'Error:' . PHP_EOL;
            $res_log .= $content['head_commit']['author']['name'] . ' 在' . date('Y-m-d H:i:s') . '向' . $content['repository']['name'] . '项目的' . $content['ref'] . '分支 push 了' . count($content['commits']) . '个 commit：' . PHP_EOL;
            $res_log .= '密钥不正确不能 pull' . PHP_EOL;
            $res_log .= '=======================================================================' . PHP_EOL;
            echo $res_log;
        }
    }

    /*
 * 执行shell命令
 */
    protected function doShell($cmd, $cwd = null)
    {
        $descriptorspec = array(
            0 => array("pipe", "r"), // stdin
            1 => array("pipe", "w"), // stdout
            2 => array("pipe", "w"), // stderr
        );
        $proc = proc_open($cmd, $descriptorspec, $pipes, $cwd, null);
        // $proc为false，表明命令执行失败
        if ($proc == false) {
            return false;
            // do sth with HTTP response
            print_r("命令执行出错！");
        } else {
            $stdout = stream_get_contents($pipes[1]);
            fclose($pipes[1]);
            $stderr = stream_get_contents($pipes[2]);
            fclose($pipes[2]);
            $status = proc_close($proc); // 释放proc
        }
        $data = array(
            'stdout' => $stdout, // 标准输出
            'stderr' => $stderr, // 错误输出
            'retval' => $status, // 返回值
        );

        return $data;
    }
}
