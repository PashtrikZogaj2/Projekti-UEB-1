<?php
session_start();

include('errorhandler.php');
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $fullname = $_POST['name'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    $gender = $_POST['gender'];

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Invalid email format';
        exit;
    }

    if (!preg_match('/^\d{10}$/', $phone)) {
        echo 'Invalid phone number format';
        exit;
    }

    if ($password !== $confirm_password) {
        echo 'Password and confirm password do not match';
        exit;
    }

  
    echo 'Registration successful';
} else {
    echo 'Invalid request method';
}
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $_SESSION["name"] = $_POST["name"];
    
    }
header("location:index.php");

?>