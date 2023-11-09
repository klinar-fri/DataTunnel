<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input_data = file_get_contents("php://input");
    $data = json_decode($input_data);

    $email = filter_var($data->email, FILTER_SANITIZE_EMAIL);

    if (empty($email)) {
        echo json_encode(array("message" => "Please enter the email!"));
    }
  
?>
