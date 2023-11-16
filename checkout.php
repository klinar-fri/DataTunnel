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
    $planType = htmlspecialchars($data->planType, ENT_QUOTES, 'UTF-8');
    $discountAmount = htmlspecialchars($data->discountAmount, ENT_QUOTES, 'UTF-8');
    $price = htmlspecialchars($data->price, ENT_QUOTES, 'UTF-8');
    $firstName = htmlspecialchars($data->firstName, ENT_QUOTES, 'UTF-8');
    $lastName = htmlspecialchars($data->lastName, ENT_QUOTES, 'UTF-8');
    $addressName = htmlspecialchars($data->addressName, ENT_QUOTES, 'UTF-8');
    $city = htmlspecialchars($data->city, ENT_QUOTES, 'UTF-8');
    $stateName = htmlspecialchars($data->stateName, ENT_QUOTES, 'UTF-8');
    $postCode = htmlspecialchars($data->postCode, ENT_QUOTES, 'UTF-8');
    $country = htmlspecialchars($data->country, ENT_QUOTES, 'UTF-8');
    $nameCard = htmlspecialchars($data->nameCard, ENT_QUOTES, 'UTF-8');

    // Hash card number and CVV
    $cardNum = password_hash($data->cardNum, PASSWORD_DEFAULT);
    $cvv = password_hash($data->cvv, PASSWORD_DEFAULT);

    $expDate = htmlspecialchars($data->expDate, ENT_QUOTES, 'UTF-8');
    


    $insert_query = "INSERT INTO checkout (email, planType, discountAmount, price, firstName, lastName, addressName, city, stateName, postCode, country, nameCard, cardNum, expDate, cvv) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $insert_stmt = mysqli_prepare($conn, $insert_query);
    
    mysqli_stmt_bind_param($insert_stmt, "sssssssssssssss", $email, $planType, $discountAmount, $price, $firstName, $lastName, $addressName, $city, $stateName, $postCode, $country, $nameCard, $cardNum, $expDate, $cvv);
    
    // After mysqli_stmt_execute
    if (mysqli_stmt_execute($insert_stmt)) {
        echo json_encode(array("message" => "Data stored successfully!"));
    } else {
        echo json_encode(array("message" => "Failed to store data. " . mysqli_error($conn)));
        // Add additional debugging info if needed
        error_log("Failed to execute statement: " . mysqli_error($conn));
    }

    mysqli_stmt_close($insert_stmt);
    mysqli_close($conn);
}
?>
