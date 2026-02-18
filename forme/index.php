<?php
    print_r($_POST);

    if(array_key_exists('username', $_GET)){
        echo "<h1>Ciao " . $_GET['username'] . "</h1>";
    }
?>

<form method="post">
    <div>
        <label>Inserisci il tuo username:</label>
        <input type="text" name="username">
    </div>
    <div>
        <label>Password:</label>
        <input type="password" name="password">
    </div>
    <button>Invia dati</button>
</form>


