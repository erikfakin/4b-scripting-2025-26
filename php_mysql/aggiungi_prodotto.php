<?php

if (
    isset($_POST['nome']) &&
    isset($_POST['prezzo']) &&
    isset($_POST['descrizione']) &&
    isset($_POST['url_immagine']) &&
    isset($_POST['quantita'])
) {

    $nome = $_POST['nome'];
    $prezzo = $_POST['prezzo'];
    $descrizione = $_POST['descrizione'];
    $url_immagine = $_POST['url_immagine'];
    $quantita = $_POST['quantita'];

    $servername = "localhost";
    $username = "root";
    $password = "1234";
    $dbname = "negozio_supereroi";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO prodotti 
        (nome, prezzo, descrizione, url_immagine, quantita_disponibile)
        VALUES ('$nome', $prezzo, '$descrizione', '$url_immagine', $quantita)";
    // Execute the SQL query
    $result = $conn->query($sql);
    print_r($result);
}