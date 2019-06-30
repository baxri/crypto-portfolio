<?php

namespace App\Models;

use App\Gateway\CoinMarketCap;
use App\User;
use Illuminate\Database\Eloquent\Model;

class CryptoCurrency extends Model
{
    protected $table = 'crypto_currencies';

    protected $fillable = [
        'user_id',
        'external_id',
        'name',
        'symbol',
        'slug',
        'balance',
        'price',
    ];

    public static function add(User $user, $data)
    {
        $cryptoCurrency = self::where([
            'user_id' => $user->id,
            'symbol' => $data['symbol'],
        ])->first();

        if ($cryptoCurrency) {
            return $cryptoCurrency;
        }

        $market = new CoinMarketCap;

        $info = (array)$market->getBySymbol($data['symbol']);

        $data = [
            'user_id' => $user->id,
            'external_id' => $info[$data['symbol']]->id,
            'name' => $info[$data['symbol']]->name,
            'symbol' => $info[$data['symbol']]->symbol,
            'slug' => $info[$data['symbol']]->slug,
            'balance' => $data['balance'],
            'price' => $info[$data['symbol']]->quote->USD->price,
        ];

        return self::create($data);
    }
}
