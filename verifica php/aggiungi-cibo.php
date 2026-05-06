// LOGICA PER INSERIRE CIBO NEL DB
<?php

$host = "localhost";
$user = "root";
$pass = "";
$db   = "esercizio_ristorante";

// Creazione connessione
$conn = new mysqli($host, $user, $pass, $db);

// Controllo 
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}