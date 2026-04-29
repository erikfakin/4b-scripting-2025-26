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


$sql = "SELECT * FROM libri JOIN autori ON libri.id_autore = autori.id_autore";
// Execute the SQL query
$result = $conn->query($sql);


// Process the result set
if ($result->num_rows > 0) {
  // Output data of each row
  while($row = $result->fetch_assoc()) {
    // print_r($row);
    echo "<h2>" . $row['titolo'] . "</h2>";
    echo "<p>" . $row['nome'] . " " . $row['cognome'] ."</p>";
    echo "<p>". $row['prezzo'] . "</p>";
    echo "<p>". $row['anno_pubblicazione'] . "</p>";
    echo "<p>". $row['genere'] . "</p>";
    echo "<form method='post' action='cancella.php'><button>Cancella</button></form>";
    echo '<br>';
  }
} else {
  echo "0 results";
}

$conn->close();

?>