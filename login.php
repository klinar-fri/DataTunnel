<?php

header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: POST'); 
header('Access-Control-Allow-Headers: Content-Type'); 
header("Content-Type: application/json");

include("database.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input_data = file_get_contents("php://input");
    $data = json_decode($input_data);

    $email = filter_var($data->email, FILTER_SANITIZE_EMAIL);
    $password = filter_var($data->password, FILTER_SANITIZE_SPECIAL_CHARS);

    if (empty($email) || empty($password)) {
        echo json_encode(array("message" => "Please enter both email and password!"));
    } else {
        
        $check_query = "SELECT id, email, password FROM userdata WHERE email = ?";
        $check_stmt = mysqli_prepare($conn, $check_query);
        mysqli_stmt_bind_param($check_stmt, "s", $email);
        mysqli_stmt_execute($check_stmt);
        mysqli_stmt_store_result($check_stmt);

        if (mysqli_stmt_num_rows($check_stmt) > 0) {
            mysqli_stmt_bind_result($check_stmt, $db_id, $db_email, $db_password);
            mysqli_stmt_fetch($check_stmt);
            
            if (password_verify($password, $db_password)) {
                echo json_encode(array("message" => "You are logged in!")); //, "id" => $db_id, "email" => $db_email)
            } else {
                echo json_encode(array("message" => "Email/Password is incorrect!"));
            }
        } else {
            echo json_encode(array("message" => "Email/Password is incorrect!"));
        }

        mysqli_stmt_close($check_stmt);
        mysqli_close($conn);
    }
}
?>
