<?php
//echo 'Prova di echo';
header("Content-Type: application/json");
$data = [
    'status' => true,
    'count' => 3,
    'value' => null,
    'values' => [1, 3, 7, 9],
    'title' => "DEMO"

];
echo json_encode(
$data
);