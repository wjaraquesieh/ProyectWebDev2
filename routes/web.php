<?php

use App\Http\Controllers\AdoptionShelterController;
use App\Http\Controllers\BlogPostController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\DogsParkController;
use App\Http\Controllers\PetsTypeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RolesController;
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

Route::resource('roles',RolesController::class)
    ->middleware('auth');

Route::resource('veterinarian', VeterinarianController::class)
    ->only('store','update','destroy')
    ->middleware('auth');
Route::resource('veterinarian', VeterinarianController::class)
    ->only('index');

Route::resource('dogsPark', DogsParkController::class)
    ->only('store','update','destroy')
    ->middleware('auth');
Route::resource('dogsPark', DogsParkController::class)
    ->only('index');

Route::resource('adoptionShelter', AdoptionShelterController::class)
    ->only('store','update','destroy')
    ->middleware('auth');
Route::resource('adoptionShelter', AdoptionShelterController::class)
    ->only('index');
    
Route::resource('blogPost', BlogPostController::class)
    ->only('store','update','destroy')
    ->middleware('auth');
Route::resource('blogPost', BlogPostController::class)
    ->only('index');

Route::resource('comment', CommentController::class)
    ->only('store','destroy')
    ->middleware('auth');
Route::resource('comment', CommentController::class)
    ->only('index');

Route::get('/comment/{blog_post_id}', [CommentController::class, 'getCommentsByBlogPost'])->name('comment.byBlogPost');

Route::get('/', function () {
    return Inertia::render('Dashboard', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
