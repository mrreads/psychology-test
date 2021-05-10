<?php
include('./php/conection.php');
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Список тестируемых </title>

    <link rel="stylesheet" href="./css/general.css">
</head>
<body>
    
    <div id="main">

    <?php
        if ($_COOKIE['auth'])
        { 
    ?>
        <h1>Список тестируемых</h1>

        <div class="results">
        <?php
        $query = "SELECT * FROM `results`;";
        $result = mysqli_query($link, $query);
        while ($data = mysqli_fetch_assoc($result))
        {
            $name = $data['result_name'];
            $value = $data['result_value'];
            $date = $data['result_date'];
            echo '<div class="result">';
                echo '<p class="result__name">'. $name .'</p>';
                echo '<p class="result__value">'. $value .'</p>';
                echo '<p class="result__date">'. $date .'</p>';
            echo '</div>';
        }
        ?>
        </div> 
    <?php
        }
        else
        {
        ?>
            <h2>Для доступа к результатам</h2>
            <h1>Введите логин и пароль</h1>
            <form action="./php/auth.php" method="POST">
                <input type="text" placeholder="логин" name="login">
                <input type="text" placeholder="пароль" name="password">
                <button class="start">Войти</button>
            </form>

        <?php
        }
    ?>  
    </div>

</body>
</html>