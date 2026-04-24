<?php

namespace App\Services;

use App\Models\SiteSetting;
use Illuminate\Support\Facades\Cache;

class SettingsService
{
    const CACHE_KEY = 'site_settings_all';

    public static function all(): array
    {
        return Cache::rememberForever(self::CACHE_KEY, function () {
            // we use try/catch in case the table is not migrated yet
            try {
                return SiteSetting::pluck('value', 'key')->toArray();
            } catch (\Exception $e) {
                return [];
            }
        });
    }

    public static function get(string $key, mixed $default = null): mixed
    {
        return static::all()[$key] ?? $default;
    }

    public static function flush(): void
    {
        Cache::forget(self::CACHE_KEY);
    }
}
