<?php
ob_start();
session_start();
?>

<html lang = "en">

<head>
    <title>Календар</title>
    <style>
        body {
            padding-top: 40px;
            padding-bottom: 40px;
            background-color: white;
        }

        .form-signin {
            max-width: 330px;
            padding: 15px;
            margin: 0 auto;
            color: #017572;
        }

        .form-signin .form-signin-heading,
        .form-signin  {
            margin-bottom: 10px;
        }

        .form-signin  {
            font-weight: normal;
        }

        .form-signin .form-control {
            position: relative;
            height: auto;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            padding: 10px;
            font-size: 16px;
        }

        .form-signin .form-control:focus {
            z-index: 2;
        }

        .form-signin input[type="text"] {
            margin-bottom: 10px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            border-color:#017572;
            width: 100%;
            height: 7%;
        }

        .form-signin input[type="password"] {
            margin-bottom: 10px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-color:#017572;
            width: 100%;
            height: 7%;
        }

        button[type="submit"]{
            margin-left:10px;
            margin-top:10px;
            background-color: #ff6600;
            border: none;
            color: white;
            padding: 7px 12px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            height: 5%;
            width: 92%;
        }

        h2{
            text-align: center;
            color: #ff6600;
            margin-top: 7%;
            font-size: 52px;
        }
    </style>

</head>

<body>

<h2>Enter Username and Password</h2>
<div class = "container form-signin">

    <?php
    $msg = '';

    if (isset($_POST['login']) && !empty($_POST['username'])
        && !empty($_POST['password'])) {

        if ($_POST['username'] == 'admin' &&
            $_POST['password'] == '1234') {
            header( 'Location: http://localhost/WebProjectFinal/SecretFolder/admin.html' );
        }else {
            $msg = 'Wrong username or password';
        }
    }
    ?>
</div>

<div class = "container">

    <form class = "form-signin" role = "form"
          action = "<?php echo htmlspecialchars($_SERVER['PHP_SELF']);
          ?>" method = "post">
        <h4 class = "form-signin-heading"><?php echo $msg; ?></h4>
        <input type = "text" class = "form-control"
               name = "username" placeholder = "username"
               required autofocus>
        <input type = "password" class = "form-control"
               name = "password" placeholder = "password" required>
        <button class = "btn btn-lg btn-primary btn-block" type = "submit"
                name = "login">Login</button>
    </form>


</div>

</body>
</html>