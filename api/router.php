
header('Access-Control-Allow-Origin: http://localhost:8080');

$key = '';

$raw-doc = file_get_content('url');

$raw_doc = preg_replace('/ertys(eidohl|eidel|dl)/i', 'xxx', $raw_doc);
$raw_doc = str_replace($key, 'xxxx', $raw_doc);
$raw_doc = str_replace('gsx$', '', $raw_doc);

$doc = json_decode($raw_doc);

echo(json_encode($doc->feed->entry, JSON_PRETTY_PRINT));


// https://spreadsheets.google.com/feeds/list/1-4t0wG4yDVRKq9ADQjem8Tn_9X4_UWRLMH-eOU3SzEo/default/public/values?alt=json
