<?php
    include "config.php";
    
    if ($_SERVER['REQUEST_METHOD'] == 'POST' || isset($_POST["btn"])) {
        $firstname = filter_input(INPUT_POST, "fname", FILTER_SANITIZE_SPECIAL_CHARS);
        $lastname = filter_input(INPUT_POST, "lname", FILTER_SANITIZE_SPECIAL_CHARS);
        $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
        $message = filter_input(INPUT_POST, "details", FILTER_SANITIZE_SPECIAL_CHARS);

        if (empty($firstname) || empty($lastname) || empty($email) || empty($message)) {
            echo "Please fill the form completely";
            header("Location: ../index.html");
        } else {
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                echo "Wrong email.";
            } else {
                $sql = "INSERT INTO contacts2 (firstname, lastname, email, message) VALUES ('$firstname', '$lastname', '$email', '$message')";
                
                // $results = $conn->query($sql);
                try{
                $query = mysqli_query($conn, $sql); 
                }
                catch(mysqli_sql_exception){
                    echo "could not insert data";
                } 

              

                $conn->close();
                
            }
            header("Location: ../index.html");
          
        }
    }

