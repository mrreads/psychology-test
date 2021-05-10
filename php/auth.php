<?

include("./conection.php");

$login = $_POST["login"];
$password = $_POST["password"];

$query = "SELECT * FROM `users` WHERE `user_login` = '$login' AND `user_password` = '$password'";
$result = mysqli_query($link, $query);
$data = mysqli_fetch_assoc($result);

if ($data) 
{
    setcookie("auth", 'asd', time() + 5, "/");
    header("Location: /result.php");
}
else 
{
    header("Location: /result.php");
}

?>