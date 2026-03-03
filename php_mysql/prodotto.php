<?php
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

$id_prodotto = $_GET['id'];
$sql = "SELECT * FROM prodotti WHERE id_prodotto=$id_prodotto";
// Execute the SQL query
$result = $conn->query($sql);

// Process the result set
if ($result->num_rows > 0) {
  // Output data of each row
  while($row = $result->fetch_assoc()) {
    echo "<h1>". $row['nome'] ."</h1>
            <img src='" . $row['url_immagine'] ."' />
            <p>". $row['descrizione'] ."</p>
            <p>". $row['prezzo'] ."€</p>
            <p>" . $row['quantita_disponibile'] . " pezzi disponibili</p>
            <p>" . $row['data_aggiunta'] . "</p>
            ";

  }
}