<?php

namespace App\Http\Controllers\User;

use App\Http\Requests\User\CryptoCurrencyAddRequest;
use App\Http\Controllers\Controller;
use App\Models\CryptoCurrency;
use Illuminate\Http\Request;

class CryptoCurrencyController extends Controller
{
    public function add(CryptoCurrencyAddRequest $request)
    {
        return response()->json(CryptoCurrency::add($request->user(), $request->validated()));
    }

    public function list( Request $request )
    {
        return response()->json($request->user()->cryptoCurrencies);
    }


}
