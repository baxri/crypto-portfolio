<?php

namespace App\Gateway;

class CoinMarketCap
{
    private $endPoint = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/';
    private $apiKey = 'eb29ca2e-6822-473f-869c-2c56cf6893ae';

    public function __construct()
    {
    }

    public function listingLatest($start = 1, $limit = 5000, $convert = 'USD')
    {
        $parameters = [
            'start' => $start,
            'limit' => $limit,
            'convert' => $convert
        ];

        return $this->__doRequest($parameters, 'listings/latest');
    }

    public function getBySymbol($symbol = 'BTC')
    {
        $parameters = [
            'symbol' => $symbol
        ];

        return $this->__doRequest($parameters, 'quotes/latest');
    }

    private function __doRequest($parameters, $uri)
    {
        $headers = [
            'Accepts: application/json',
            'X-CMC_PRO_API_KEY: ' . $this->apiKey,
        ];
        $qs = http_build_query($parameters);
        $request = "{$this->endPoint}{$uri}?{$qs}";

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => $request,
            CURLOPT_HTTPHEADER => $headers,
            CURLOPT_RETURNTRANSFER => 1
        ));

        $response = curl_exec($curl);
        $response = json_decode($response);
        curl_close($curl);
        return $response->data;
    }
}