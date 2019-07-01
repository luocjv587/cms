<?php

namespace App\Http\Controllers\Api;

use App\Support\Response;
use App\Support\Transform;
use Illuminate\Support\Facades\Artisan;
use League\Fractal\Manager;
use App\Http\Controllers\Controller;

class OpenApiController extends Controller
{
    /**
     * @author luochenjie@shopex.cn
     *
     * 更新线上环境
     */
    public function updateFormal()
    {
        Artisan::call('update:formal');
    }
}
