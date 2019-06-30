<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddUserIdToCryptoCurrenciesTable extends Migration
{
    public function up()
    {
        Schema::table('crypto_currencies', function (Blueprint $table) {
            $table->integer('user_id')->after('id');
        });
    }

    public function down()
    {
        Schema::table('crypto_currencies', function (Blueprint $table) {
            //
        });
    }
}
