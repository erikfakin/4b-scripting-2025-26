CREATE DATABASE IF NOT EXISTS negozio_supereroi;
USE negozio_supereroi;

-- 1. Categorie (Marvel, DC, Anime, ecc.)
CREATE TABLE categorie (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descrizione TEXT
);

-- 2. Prodotti (con URL immagine integrato)
CREATE TABLE prodotti (
    id_prodotto INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    id_categoria INT,
    prezzo DECIMAL(10, 2) NOT NULL,
    quantita_disponibile INT DEFAULT 0,
    descrizione TEXT,
    url_immagine VARCHAR(255), -- Salviamo qui il link diretto alla foto
    data_aggiunta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_categoria) REFERENCES categorie(id_categoria) ON DELETE SET NULL
);

-- 3. Ordini
CREATE TABLE ordini (
    id_ordine INT AUTO_INCREMENT PRIMARY KEY,
    data_ordine TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    stato_ordine ENUM('in_attesa', 'spedito', 'consegnato', 'annullato') DEFAULT 'in_attesa',
    totale_ordine DECIMAL(10, 2) NOT NULL,
    indirizzo_spedizione TEXT NOT NULL
);

-- 4. Dettagli Ordine (Collega prodotti e ordini)
CREATE TABLE dettagli_ordine (
    id_dettaglio INT AUTO_INCREMENT PRIMARY KEY,
    id_ordine INT NOT NULL,
    id_prodotto INT NOT NULL,
    quantita INT NOT NULL,
    prezzo_unitario DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_ordine) REFERENCES ordini(id_ordine) ON DELETE CASCADE,
    FOREIGN KEY (id_prodotto) REFERENCES prodotti(id_prodotto)
);

-- 5. Pagamenti
CREATE TABLE pagamenti (
    id_pagamento INT AUTO_INCREMENT PRIMARY KEY,
    id_ordine INT NOT NULL,
    metodo_pagamento ENUM('carta_credito', 'paypal', 'bonifico') NOT NULL,
    data_pagamento TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    importo DECIMAL(10, 2) NOT NULL,
    stato_pagamento ENUM('completato', 'fallito', 'rimborsato') DEFAULT 'completato',
    FOREIGN KEY (id_ordine) REFERENCES ordini(id_ordine) ON DELETE CASCADE
);