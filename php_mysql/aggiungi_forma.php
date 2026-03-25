<html>
  <head>
     <link rel="stylesheet" href="stile.css">

  </head>
  <body>
    <nav>
      <img width="75" src="immagini/logo.png" alt="Logo" />
      <a href="/" aria-disabled="true">Prodotti</a>
      <a href="aggiungi_forma.php">Aggiungi prodotto</a>
    </nav>

<form action="aggiungi_prodotto.php" method="post">
    <div>
        <label>Nome: </label>
        <input name="nome" type="text" />
    </div>
    <div>
        <label>Prezzo:</label>
        <input name="prezzo" type="number" />
    </div>
    <div>
        <label>Quantita' disponibile:</label>
        <input name="quantita" type="number" />
    </div>
    <div>
        <label>Descrizione:</label>
        <textarea name="descrizione"></textarea>
    </div>
    <div>
        <label>URL immagine:</label>
        <input name="url_immagine" type="text" />
    </div>
    <button>Salva</button>
</form>

</body>
</html> 