<?php
$server = "localhost";
$user = "root";
$password = "";
$db = "data";

$conn = mysqli_connect($server, $user, $password, $db);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['msg'];

$sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$msg')";

if (mysqli_query($conn, $sql)) {
    header("Location:submision.html");
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
