<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;

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


Route::group(['prefix' => 'admin'], function(){
    // Auth::routes();
    Route::post('login', [LoginController::class, 'login']);
    Route::post('logout', [LoginController::class, 'logout'])->name('logout');
});

Route::get('/admin/{any?}', function () {
    return view('welcome');
})->middleware('auth');

Route::get('/{any?}', function() {
    return view('welcome');
});

// Auth::routes();

// Route::get('/home', 'App\Http\Controllers\HomeController@index')->name('home');




// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');