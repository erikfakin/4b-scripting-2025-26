<?php
$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "libreria";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

print_r($_POST);

$titolo = $_POST['titolo'];
$anno_pubblicazione = $_POST['anno_pubblicazione'];
$prezzo = $_POST['prezzo'];
$genere = $_POST['genere'];
$id_autore = $_POST['id_autore'];


$sql = "INSERT INTO libri (titolo, anno_pubblicazione, prezzo, genere, id_autore)
    VALUES ('$titolo', $anno_pubblicazione, $prezzo, '$genere', $id_autore)";

print_r($sql);

$result = $conn->query($sql);

print_r($result);

