<?php
$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "negozio_supereroi";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM prodotti";
$result = $conn->query($sql);
?>
<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Supereroi</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,700;0,900&family=Inter:wght@400;500&family=Space+Grotesk:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="stile.css">
  </head>
  <body>
    <nav>
      <img width="75" src="immagini/logo.png" alt="Logo" />
      <a href="/" aria-disabled="true">Prodotti</a>
      <a href="aggiungi_forma.php">Aggiungi prodotto</a>
    </nav>

    <?php if ($result->num_rows > 0): ?>
    <main class="product-grid">
      <?php while ($row = $result->fetch_assoc()): ?>
      <a href="prodotto.php?id=<?= htmlspecialchars($row['id_prodotto']) ?>" class="product-card">
        <div class="product-img-wrap">
          <img src="<?= htmlspecialchars($row['url_immagine']) ?>" alt="<?= htmlspecialchars($row['nome']) ?>">
        </div>
        <div class="product-info">
          <h3 class="product-name"><?= htmlspecialchars($row['nome']) ?></h3>
          <p class="product-price"><?= htmlspecialchars($row['prezzo']) ?> €</p>
          <p class="product-qty"><?= htmlspecialchars($row['quantita_disponibile']) ?> pezzi disponibili</p>
        </div>
      </a>
      <?php endwhile; ?>
    </main>
    <?php else: ?>
    <p class="no-results">Nessun prodotto disponibile.</p>
    <?php endif; ?>

    <?php $conn->close(); ?>
  </body>
</html>