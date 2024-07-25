<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $file = 'subscribers.txt';
    file_put_contents($file, $email . PHP_EOL, FILE_APPEND);
    echo "Thank you for subscribing!";
}
?>
