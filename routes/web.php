<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\Public\HomeController;
use App\Http\Controllers\Public\AboutController;
use App\Http\Controllers\Public\ScholarshipController;
use App\Http\Controllers\Public\RecipientController;
use App\Http\Controllers\Public\SchoolController;
use App\Http\Controllers\Public\DonorController;
use App\Http\Controllers\Public\GalleryController;
use App\Http\Controllers\Public\NewsController;
use App\Http\Controllers\Public\DonateController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [AboutController::class, 'index'])->name('about');
Route::get('/scholarships', [ScholarshipController::class, 'index'])->name('scholarships');
Route::get('/recipients', [RecipientController::class, 'index'])->name('recipients');
Route::get('/gallery', [GalleryController::class, 'index'])->name('gallery');
Route::get('/news', [NewsController::class, 'index'])->name('news');
Route::get('/news/{post:slug}', [NewsController::class, 'show'])->name('news.show');
Route::get('/donate', [DonateController::class, 'index'])->name('donate');
Route::get('/schools', [SchoolController::class, 'index'])->name('schools');
Route::get('/donors', [DonorController::class, 'index'])->name('donors');

// Admin Auth
Route::prefix('admin')->group(function () {
    require __DIR__.'/auth.php';
});

// Admin Dashboard & Management
Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    require __DIR__.'/admin.php';
});
