<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

use App\Models\User;
try {
    $count = User::count();
    echo "User count: " . $count . "\n";
} catch (\Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
