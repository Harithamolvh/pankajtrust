<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!-- Primary Meta Tags -->
        <meta name="title" content="Dr. Pankaj Educational and Charitable Trust">
        <meta name="description" content="Empowering bright, financially disadvantaged students in Kerala since 1999 through merit-cum-means scholarships.">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:title" content="Dr. Pankaj Educational and Charitable Trust">
        <meta property="og:description" content="Empowering bright, financially disadvantaged students in Kerala since 1999 through merit-cum-means scholarships.">
        <meta property="og:image" content="{{ asset('images/trust-banner1.png') }}">

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="{{ url()->current() }}">
        <meta property="twitter:title" content="Dr. Pankaj Educational and Charitable Trust">
        <meta property="twitter:description" content="Empowering bright, financially disadvantaged students in Kerala since 1999 through merit-cum-means scholarships.">
        <meta property="twitter:image" content="{{ asset('images/trust-banner1.png') }}">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,500&family=DM+Sans:wght@400;500;600&family=Playfair+Display:wght@700;900&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap" rel="stylesheet">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])

        <!-- Favicon -->
        <link rel="icon" type="image/png" href="{{ asset('images/favicon.png') }}">

        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
