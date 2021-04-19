<?php

$file =  __DIR__ . './../result.json';

if(!is_file($file))
{

    $put = '';
    file_put_contents($file, $put);
}

$old = file_get_contents($file);
$old = json_decode($old);

if (empty($old))
{
    $old = [];
}

$new = $_POST;

array_push($old, $new);

$data = json_encode($old);

file_put_contents($file, $data);