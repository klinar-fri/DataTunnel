<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET'); 
header('Access-Control-Allow-Headers: Content-Type'); 
header("Content-Type: application/json");

include("database.php");

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $query = "SELECT * FROM support";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {
        $suppData = array();

        while ($row = mysqli_fetch_assoc($result)) {
            $suppData[] = $row;
        }

        echo json_encode($suppData);
    } else {
        echo json_encode(array("message" => "No support data found."));
    }

    mysqli_close($conn);
} else {
    echo json_encode(array("message" => "Invalid request method."));
}
?>
