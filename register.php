<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST["username"];
    $password = $_POST["password"];

    // JSON file path
    $jsonFile = "userdata.json";

    // Check if JSON file exists, create it if it doesn't
    if (!file_exists($jsonFile)) {
        file_put_contents($jsonFile, "[]");
    }

    // Read existing data from JSON file
    $data = file_get_contents($jsonFile);
    $userData = json_decode($data, true);

    // Add new user data
    $userData[] = array("username" => $username, "password" => $password);

    // Save updated data back to the JSON file
    file_put_contents($jsonFile, json_encode($userData));

    // Redirect to a new page or perform other actions
    header("Location: signin.php");
    exit();
}
?>