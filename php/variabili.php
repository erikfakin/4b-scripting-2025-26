<?php

// Il nome delle variabili deve iniziare con il simbolo $
$nome = "Erik";
$eta = 30;
$cilindrata = 1.9;
$colori = ["blu", "verde", "giallo", 4, 6];

echo $colori[1];
echo "<br>";
echo PHP_EOL;
echo "\n";

if($eta > 18){
    echo "Maggiorenne " . $eta;
} else if($eta > 65){
    echo "Pensionato " . $eta;
} else {
    echo "Viva la $nome";
}
echo "<br>";
for($i = 0; $i < 100; $i++){
    echo $i . " ";
}



?>