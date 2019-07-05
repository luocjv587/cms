<?php

namespace App\Console;

use App\Console\Commands\getDouban;
use App\Console\Commands\getHuxiu;
use App\Console\Commands\getToutiao;
use App\Console\Commands\getWangyi;
use App\Console\Commands\getZhihuDailyReport;
use App\Console\Commands\updateFormal;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\BlogInstall::class,
        Commands\CreateAdmin::class,
        getZhihuDailyReport::class,
        getDouban::class,
        getToutiao::class,
        getWangyi::class,
        updateFormal::class,
        getHuxiu::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param \Illuminate\Console\Scheduling\Schedule $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')
        //          ->hourly();
        $schedule->command('get:zhi_hu_daily_report')->daily();

        $schedule->command('get:huxiu')->daily();
    }

    /**
     * Register the Closure based commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        require base_path('routes/console.php');
    }
}
