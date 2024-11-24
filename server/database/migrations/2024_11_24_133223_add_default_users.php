<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AddDefaultUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('users')->insert([
            [
                'name' => 'Victor Moreno',
                'email' => 'victor.moreno@val.com',
                'password' => Hash::make('senha123'), // Substitua por uma senha segura
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Refu Zado',
                'email' => 'refu.zado@val.com',
                'password' => Hash::make('senha321'), // Substitua por uma senha segura
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::table('users')->where('email', 'victor.moreno@val.com')->delete();
        DB::table('users')->where('email', 'refu.zado@val.com')->delete();
    }
}
