<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\AdminRecipientController;
use App\Http\Controllers\Admin\AdminSchoolController;
use App\Http\Controllers\Admin\AdminDonorController;

use App\Http\Controllers\Admin\AdminNewsController;
use App\Http\Controllers\Admin\AdminMessageController;
use App\Http\Controllers\Admin\AdminSettingsController;
use App\Http\Controllers\Admin\AdminUserController;

Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

// Messages
Route::resource('messages', AdminMessageController::class)->only(['index', 'show', 'destroy']);

// Settings
Route::get('settings', [AdminSettingsController::class, 'index'])->name('settings.index');
Route::post('settings', [AdminSettingsController::class, 'update'])->name('settings.update');

// Users
Route::resource('users', AdminUserController::class)->except(['create', 'show', 'edit']);

// News
Route::resource('news', AdminNewsController::class);

// Recipients
Route::patch('recipients/{recipient}/status', [AdminRecipientController::class, 'updateStatus'])->name('recipients.status');
Route::get('recipients/export', [AdminRecipientController::class, 'export'])->name('recipients.export');
Route::resource('recipients', AdminRecipientController::class);

// Schools
Route::patch('schools/{school}/toggle', [AdminSchoolController::class, 'toggle'])->name('schools.toggle');
Route::resource('schools', AdminSchoolController::class);

// Donors
Route::post('donors/reorder', [AdminDonorController::class, 'reorder'])->name('donors.reorder');
Route::resource('donors', AdminDonorController::class);


