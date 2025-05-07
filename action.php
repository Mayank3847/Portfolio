<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    
    // Display the input data
    echo "<h2>Submitted Information</h2>";
    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
} else {
    echo "Invalid request method.";
}
?>
