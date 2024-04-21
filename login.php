<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $users = json_decode(file_get_contents("userdata.json"), true);

    foreach ($users as $user) {
        if ($user["username"] === $username && $user["password"] === $password) {
            $_SESSION["username"] = $username;
            header("Location: index.php");
            exit();
        }
    }

    echo "<script>
            document.addEventListener('DOMContentLoaded', function() {
                document.getElementById('error').style.display = 'block';
            });
          </script>";
}header("Location:signin.php")
?>