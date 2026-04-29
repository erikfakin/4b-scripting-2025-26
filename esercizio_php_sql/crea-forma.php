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


$sql = "SELECT * FROM autori";
// Execute the SQL query
$result = $conn->query($sql);

// print_r($result);
?>

<form action="crea.php" method="post">
    <div>
        <label for="titolo">Titolo:</label>
        <input type="text" name="titolo" id="titolo" placeholder="Inserisci il titolo...">
    </div>
    <div>
        <label for="prezzo">Prezzo:</label>
        <input type="number" name="prezzo" id="Prezzo" placeholder="Inserisci il prezzo...">
    </div>
    <div>
        <label for="anno_pubblicazione">Anno di pubblicazione</label>
        <input type="number" step="1" min="1000" max="2026" name="anno_pubblicazione" id="anno_pubblicazione" placeholder="Anno di pubblicazione">
    </div>
    <div>
        <label for="genere">Genere</label>
        <input type="text" name="genere" id="genere" placeholder="Inserisci il genere...">
    </div>
    <div>
        <label for="id_autore">Autore:</label>
        <select name="id_autore" id="id_autore">
            <?php
            while($row = $result->fetch_assoc()) {
                echo "<option value='". $row['id_autore'] . "'>" . $row['nome'] . " " . $row['cognome'] . "</option>";
            }
            ?>
        </select>
    </div>
    <button>Crea</button>
</form>
