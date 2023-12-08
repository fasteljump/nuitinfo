<?php  
    seesion_start()
    $servername = "127.0.0.1"; 
    $username = "newuser";
    $password = "123456";
    $database = "mysql";
    
    // Tentative de connexion à la base de données
    $conn = new mysqli($servername, $username, $password, $database);
    header("Location: ". "http://127.0.0.1:5500/index.html");
    // Vérifier la connexion
    if ($conn->connect_error) 
        die("La connexion à la base de données a échoué : " . $conn->connect_error);
    else {
        
       // exit();
    }
    
    // Fermer la connexion
    $conn->close();
?>