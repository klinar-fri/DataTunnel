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

    if (empty($email)) {
        echo json_encode(array("message" => "Please enter the email!"));
    } else {
        $check_query = "SELECT * FROM userdata WHERE email = ?";
        $check_stmt = mysqli_prepare($conn, $check_query);
        mysqli_stmt_bind_param($check_stmt, "s", $email);
        mysqli_stmt_execute($check_stmt);
        mysqli_stmt_store_result($check_stmt);

        if (mysqli_stmt_num_rows($check_stmt) > 0) {
            // Generate a new password
            $newPassword = bin2hex(random_bytes(8)); // Generates a random 16-character password
            $hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);

            // Update the user's password in the database
            $update_query = "UPDATE userdata SET password = ? WHERE email = ?";
            $update_stmt = mysqli_prepare($conn, $update_query);
            mysqli_stmt_bind_param($update_stmt, "ss", $hashedPassword, $email);
            mysqli_stmt_execute($update_stmt);
            mysqli_stmt_close($update_stmt);

            // Send email with the new password
            $to = $email;
            $subject = "Password Reset";
            $message = "Your new password is: " . $newPassword;
            $headers = "From: uhckmkknlhtxnnrnbm@cazlv.com"; // Set your email address here

            if (mail($to, $subject, $message, $headers)) {
                echo json_encode(array("message" => "Password reset successful. Check your email for the new password."));
            } else {
                echo json_encode(array("message" => "Failed to send email. Please try again later."));
            }
        } else {
            echo json_encode(array("message" => "Email address not found in the database."));
        }

        mysqli_stmt_close($check_stmt);
        mysqli_close($conn);
    }
}
?>
