<?php

namespace App\Http\Controllers;

use App\Gateway\CoinMarketCap;

class CoinMarketCapController extends Controller
{
    public function listingLatest(){
        return response()->json((new CoinMarketCap)->listingLatest(1, 20));
    }
}
