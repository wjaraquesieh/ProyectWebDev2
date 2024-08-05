<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PetsTypeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SocialMediaController;
use App\Http\Controllers\VeterinarianController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::resource('category', CategoryController::class)
    ->middleware('auth');

Route::resource('service', ServiceController::class)
    ->middleware('auth');

Route::resource('socialMedia', SocialMediaController::class)
    ->middleware('auth');

Route::resource('petsType', PetsTypeController::class)
    ->middleware('auth');

Route::resource('veterinarian', VeterinarianController::class)
    ->middleware('auth');


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
