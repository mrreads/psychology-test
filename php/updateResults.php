<?php

include('./conection.php');

echo "<pre>";
print_r($_POST);
echo "</pre>";

$name = $_POST['name'];
$value = $_POST['value'];
$date = $_POST['date'];

$query = "INSERT INTO `results` (`id_result`, `result_name`, `result_date`, `result_value`) VALUES (NULL, '$name', '$date', '$value');";

mysqli_query($link, $query);