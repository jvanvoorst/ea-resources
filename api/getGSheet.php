<?php

header('Access-Control-Allow-Origin: http://localhost:3000');

$key = '1-4t0wG4yDVRKq9ADQjem8Tn_9X4_UWRLMH-eOU3SzEo';
$url = "https://spreadsheets.google.com/feeds/list/$key/default/public/values?alt=json";

$raw_doc = file_get_contents($url);

// $raw_doc = preg_replace('/ertys(eidohl|eidel|dl)/i', 'xxx', $raw_doc);
$raw_doc = str_replace($key, 'xxxx', $raw_doc);
$raw_doc = str_replace('gsx$', '', $raw_doc);

$doc = json_decode($raw_doc);

echo(json_encode($doc->feed->entry, JSON_PRETTY_PRINT));

?>
