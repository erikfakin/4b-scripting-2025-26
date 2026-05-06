<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Aggiungi Piatto</title>
    <style>
        body { font-family: sans-serif; background: #f0f2f5; padding: 50px; }
        .form-container { 
            max-width: 500px; 
            margin: 0 auto; 
            background: white; 
            padding: 30px; 
            border-radius: 15px; 
            box-shadow: 0 4px 6px rgba(0,0,0,0.1); 
        }
        .input-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input, select { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; box-sizing: border-box; }
        button { width: 100%; padding: 12px; background: #2ecc71; border: none; color: white; font-weight: bold; border-radius: 5px; cursor: pointer; }
        .alert { padding: 10px; background: #d4edda; color: #155724; border-radius: 5px; margin-bottom: 20px; }
    </style>
</head>
<body>

<div class="form-container">
    <h2>Nuovo Piatto</h2>
    
    <form method="???" action="???">
        <div class="input-group">
            <label>Nome del Piatto</label>
            <input type="text" name="nome" required>
        </div>
        <div class="input-group">
            <label>Prezzo (€)</label>
            <input type="number" step="0.01" name="prezzo" required>
        </div>
        <div class="input-group">
            <label>URL Immagine</label>
            <input type="url" name="url" required>
        </div>
        <div class="input-group">
            <label>Categoria</label>
            <select name="categoria">
                !!! CATEGORIE !!!
            </select>
        </div>
        <button type="submit">Aggiungi al Menù</button>
    </form>
    <br>
    <a href="index.php" style="text-decoration:none; color:#7f8c8d;">← Torna alla lista</a>
</div>

</body>
</html>