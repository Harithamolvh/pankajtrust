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

use App\Http\Controllers\Public\ContactController;
use App\Http\Controllers\Public\DonateController;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Http;

Route::get('/founder-image', function () {
    $cached = Storage::disk('public')->path('founder/dr-pankaj.jpg');
    if (!file_exists($cached)) {
        if (!Storage::disk('public')->exists('founder')) {
            Storage::disk('public')->makeDirectory('founder');
        }
        $urls = [
            'https://www.pankajtrust.org/images/dr-pankaj.jpg',
            'https://www.pankajtrust.org/assets/images/founder.jpg',
        ];
        foreach ($urls as $url) {
            try {
                $res = Http::timeout(5)->withoutVerifying()->get($url);
                if ($res->ok()) {
                    Storage::disk('public')->put('founder/dr-pankaj.jpg', $res->body());
                    break;
                }
            } catch (\Exception $e) { continue; }
        }
    }
    
    if (file_exists($cached)) {
        return response()->file($cached);
    }
    
    return redirect('https://images.unsplash.com/photo-1507676184212-d0c30a47bfb0?auto=format&fit=crop&q=80&w=800');
})->name('founder.image');
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [AboutController::class, 'index'])->name('about');
Route::get('/scholarship', [ScholarshipController::class, 'index'])->name('scholarship');
Route::get('/recipients', [RecipientController::class, 'index'])->name('recipients.index');
Route::get('/gallery', [GalleryController::class, 'index'])->name('gallery');
Route::get('/news', [NewsController::class, 'index'])->name('news.index');
Route::get('/news/{slug}', [NewsController::class, 'show'])->name('news.show');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
Route::get('/donate', [DonateController::class, 'index'])->name('donate');
Route::get('/schools', [SchoolController::class, 'index'])->name('schools');
Route::get('/donors', [DonorController::class, 'index'])->name('donors');

Route::prefix('admin')->group(function () {
    require __DIR__.'/auth.php';
});
