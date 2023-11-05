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

    if (empty($email)) {
        echo json_encode(array("message" => "Please enter the email!"));
    } elseif (empty($password)) {
        echo json_encode(array("message" => "Please enter the password!"));
    } else {
        
        $check_query = "SELECT * FROM userdata WHERE email = ?";
        $check_stmt = mysqli_prepare($conn, $check_query);
        mysqli_stmt_bind_param($check_stmt, "s", $email);
        mysqli_stmt_execute($check_stmt);
        mysqli_stmt_store_result($check_stmt);

        if (mysqli_stmt_num_rows($check_stmt) > 0) {
            echo json_encode(array("message" => "That email address is already taken!"));
        } else {

            $hash = password_hash($password, PASSWORD_DEFAULT);
            $sql = "INSERT INTO userdata (email, password) VALUES (?, ?)";

            $stmt = mysqli_prepare($conn, $sql);
            mysqli_stmt_bind_param($stmt, "ss", $email, $hash);

            try {
                mysqli_stmt_execute($stmt);
                echo json_encode(array("message" => "You are now registered!"));
            } catch (mysqli_sql_exception $e) {
                echo json_encode(array("message" => "Failed to register. Please try again later."));
            }

            mysqli_stmt_close($stmt);
        }

        mysqli_stmt_close($check_stmt);
        mysqli_close($conn);
    }
}

?>
