<?php
$url = 'https://www.pankajtrust.org/gallery';
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$output = curl_exec($ch);
curl_close($ch);

if (preg_match_all('/<img[^>]+src="([^"]+)"/i', $output, $matches)) {
    echo "Found images:\n";
    print_r($matches[1]);
}

if (preg_match_all('/<a[^>]+href="([^"]+\.(jpg|jpeg|png|gif))"/i', $output, $matches)) {
    echo "Found image links:\n";
    print_r($matches[1]);
}

echo "First 500 chars:\n" . substr($output, 0, 500);
