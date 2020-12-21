<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $data = [
        'name' => getRandomName()
    ];

    return view('homepage', $data);
})->name('homepage');


function getRandomName() {
    $names = ['Topolino', 'Paperino', 'Davide', 'Boolean', 'World', 'Donato', 'Simone', 'Sofia'];
    $index = rand(0, count($names) - 1);

    return $names[$index];
}
