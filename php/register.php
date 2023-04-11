<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "guvi_register";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo "Connection failed: " . $conn->connect_error;
    exit();
}
else{
    $stmt = $conn->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
    $name = $_POST['name'];
    $email = $_POST['email'];
    $stmt->bind_param("ss", $name, $email);
    $stmt->execute();
}
$stmt->close();
$conn->close();

?>
