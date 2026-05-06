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

// Select dei cibi
// Bisogna utilizzare il JOIN per selezionare anche il nome e il colore della categoria
$sql = "SCRIVI SQL";
        
$result = $conn->query($sql);

?>


<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Menù Ristorante</title>
    <style>
        body { font-family: 'Segoe UI', Roboto, sans-serif; background-color: #f4f7f6; margin: 0; padding: 40px; }
        .container { max-width: 1200px; margin: 0 auto; }
        header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
        
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 30px; }
        
        .card { 
            background: white; 
            border-radius: 12px; 
            overflow: hidden; 
            box-shadow: 0 10px 20px rgba(0,0,0,0.05); 
            transition: 0.3s; 
            border-top: 6px solid; 
        }
        .card:hover { transform: translateY(-10px); }
        
        .card-img { width: 100%; height: 220px; object-fit: cover; }
        .card-body { padding: 20px; }
        
        .cat-badge { 
            display: inline-block; 
            padding: 5px 15px; 
            border-radius: 50px; 
            font-size: 0.8rem; 
            font-weight: bold; 
            margin-bottom: 15px;
            color: #2c3e50;
        }
        
        .dish-name { font-size: 1.3rem; margin: 0 0 10px 0; color: #333; }
        .price { font-size: 1.2rem; font-weight: bold; color: #e67e22; }
        .btn-new { background: #333; color: white; padding: 12px 25px; border-radius: 8px; text-decoration: none; }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>Menù Digitale</h1>
        <a href="form.php" class="btn-new">Aggiungi Piatto</a>
    </header>

    <div class="grid">
        <?php
        if ($result->num_rows > 0):
            while($cibo = $result->fetch_assoc()): ?>
                <div class="card" style="border-top-color: !!!COLORE CATEGORIA!!!;">
                    <img src="!!!URL IMMAGINE !!!" class="card-img" alt="Immagine piatto">
                    <div class="card-body">
                        <span class="cat-badge" style="background-color: !!! COLORE CATEGORIA !!!;">
                            !!! NOME CATEGORIA !!!
                        </span>
                        <h3 class="dish-name">!!! NOME PIATTO !!!</h3>
                        <div class="price">!!! PREZZO !!!</div>
                    </div>
                </div>
            <?php endwhile; 
        endif; ?>
    </div>
</div>

</body>
</html>