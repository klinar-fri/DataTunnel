<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET'); 
header('Access-Control-Allow-Headers: Content-Type'); 
header("Content-Type: application/json");

include("database.php");

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (isset($_GET["email"])) {
        $email = mysqli_real_escape_string($conn, $_GET["email"]);

        $query = "SELECT * FROM checkout WHERE email = '$email'";
        $result = mysqli_query($conn, $query);

        if (mysqli_num_rows($result) > 0) {
            $checkoutData = array();

            while ($row = mysqli_fetch_assoc($result)) {
                $checkoutData[] = $row;
            }

            echo json_encode($checkoutData);
        } else {
            echo json_encode(array("message" => "No matching data found for the provided email."));
        }

        mysqli_close($conn);
    } else {
        echo json_encode(array("message" => "Email parameter is missing."));
    }
} else {
    echo json_encode(array("message" => "Invalid request method."));    
}
?>
