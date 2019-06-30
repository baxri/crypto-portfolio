<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCryptocurrenciesTable extends Migration
{
    public function up()
    {
        Schema::create('crypto_currencies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('external_id');
            $table->string('name');
            $table->string('symbol');
            $table->string('slug')->unique();
            $table->string('balance');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('crypto_currencies');
    }
}
