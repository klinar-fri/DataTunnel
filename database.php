<?php
    $db_server = "localhost";
    $db_user = "root";
    $db_pass = "";
    $db_name = "usersdb";
    $conn = "";
    
    try {
        $conn = new mysqli($db_server, $db_user, $db_pass, $db_name);
    
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
    
    } catch (mysqli_sql_exception $e) {
        echo "Could not connect!";
    }
    
    // $db_server = "sql201.infinityfree.com";
    // $db_user = "if0_35412222";
    // $db_pass = "4j3kaVH0FSV";
    // $db_name = "if0_35412222_usersdb";
    // $conn = "";
?>