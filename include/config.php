<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "tedprimedb";

    try{
        $conn = new mysqli($servername, $username, $password, $dbname);
        echo "Connection Successfull";
    }
    catch(mysqli_sql_exception){
        echo "Connection Failed";
    }
   
    // if($conn->connect_error){
    //     die("Connection failed". $conn->connect_error);
    // }