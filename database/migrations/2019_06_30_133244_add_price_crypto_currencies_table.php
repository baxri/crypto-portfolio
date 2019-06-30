<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddPriceCryptoCurrenciesTable extends Migration
{
    public function up()
    {
        Schema::table('crypto_currencies', function (Blueprint $table) {
            $table->string('price')->after('balance');
        });
    }

    public function down()
    {
        Schema::table('crypto_currencies', function (Blueprint $table) {
            //
        });
    }
}
