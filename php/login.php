<?php
require './vendor/autoload.php';

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "guvi_register";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
  echo "Connection failed: " . $conn->connect_error;
  exit();
}


$stmt = $conn->prepare("SELECT * FROM users WHERE name= ? AND email=?");
$stmt->bind_param("ss",$name,$email);

$name = $_POST['name'];
$email = $_POST['email'];
$stmt->execute();

if ($stmt->fetch()) {
  $redis = new Predis\Client();
  $sessionId = uniqid();
  $redis->set($sessionId, $name);
  setcookie('sessionId', $sessionId, time()+300, '/', '', false, true);
  echo "Success";
  mysqli_close($conn);
  exit;
}
else {
  echo "error";
  exit;
}


?>
