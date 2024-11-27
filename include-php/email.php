<?php
    include "config.php";
    if($_SERVER['REQUEST_METHOD'] == 'POST' || isset($_POST['btn2'])){
        $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
        filter_var($email, FILTER_VALIDATE_EMAIL);
        if(!isset($email)){
            echo "Enter your email";
            header('Location: ../index.html');
        }else{
                echo "valid email";
                $sql = "INSERT INTO mail (email) VALUES ( '$email')";
                
              
                try{
                $query = mysqli_query($conn, $sql); 
                }
                catch(mysqli_sql_exception){
                    echo "could not insert data";
                } 

              

                $conn->close();
               
           
            header('Location: ../index.html');
        }
    }
