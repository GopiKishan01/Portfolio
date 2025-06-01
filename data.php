<?php

    $server = 'localhost';
    $user = 'root';
    $password = '';
    $db = 'data';

    $conn = new mysqli($server, $user, $password, $db);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        echo "<pre>";
        print_r($_POST); // Debug: check what is received
        echo "</pre>";

        $name = $_POST['name'] ?? '';
        $email = $_POST['email'] ?? '';
        $msg = $_POST['msg'] ?? '';

        $stmt = $conn->prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)");
        if (!$stmt) {
            die("Prepare failed: " . $conn->error);
        }

        $stmt->bind_param("sss", $name, $email, $msg);

        if ($stmt->execute()) {
            echo " Data inserted successfully!";
        } else {
            echo " Error inserting data: " . $stmt->error;
        }

        $stmt->close();
    }

    $conn->close();
?>