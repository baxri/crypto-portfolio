<?php

use Illuminate\Http\Request;

// Public routes
Route::post('/signup', 'User\SignUpController@signup');
Route::get('/cryptocurrency/listings/latest', 'CoinMarketCapController@listingLatest');

// Private routes
Route::middleware(['auth:api'])->group(function () {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/cryptocurrency/add', 'User\CryptoCurrencyController@add');
    Route::get('/cryptocurrency/list', 'User\CryptoCurrencyController@list');
});


