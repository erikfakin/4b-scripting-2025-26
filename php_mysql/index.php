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


$sql = "SELECT * FROM prodotti";
// Execute the SQL query
$result = $conn->query($sql);

// Process the result set
if ($result->num_rows > 0) {
  // Output data of each row
  while($row = $result->fetch_assoc()) {
    print_r($row);
  }
} else {
  echo "0 results";
}

$conn->close();
?>