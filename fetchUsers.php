<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET'); 
header('Access-Control-Allow-Headers: Content-Type'); 
header("Content-Type: application/json");

include("database.php");

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $query = "SELECT * FROM userdata";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {
        $userdata = array();

        while ($row = mysqli_fetch_assoc($result)) {
            $userdata[] = $row;
        }

        echo json_encode($userdata);
    } else {
        echo json_encode(array("message" => "No userdata found."));
    }

    mysqli_close($conn);
} else {
    echo json_encode(array("message" => "Invalid request method."));
}
?>
