-- 4. INSERIMENTO CATEGORIE
INSERT INTO categorie (nome, descrizione) VALUES 
('Marvel', 'Eroi del MCU e fumetti classici'),
('DC Comics', 'Lega della Giustizia e villain'),
('Anime', 'Action figure dai manga giapponesi'),
('Star Wars', 'Personaggi della saga galattica'),
('Indie Comics', 'Eroi indipendenti e Image Comics');

-- 5. INSERIMENTO 20 PRODOTTI
INSERT INTO prodotti (nome, id_categoria, prezzo, quantita_disponibile, descrizione, url_immagine) VALUES 
('Spider-Man Noir', 1, 45.00, 15, 'Versione investigatore anni 30.', 'immagini/spiderman-noir.webp'),
('Iron Man MK85', 1, 89.90, 5, 'L''armatura finale di Tony Stark.', 'immagini/ironman-mk85.webp'),
('Captain America', 1, 55.00, 10, 'Figurina di Captain America', 'immagini/captain-america.webp'),
('Thanos', 1, 120.00, 3, 'Statua di Thanos.', 'immagini/thanos.webp'),
('Wolverine Classic', 1, 35.00, 20, 'Costume giallo e blu originale.', 'immagini/weolverine.webp'),
('Black Widow', 1, 40.00, 8, 'Figurina di Black Widow.', 'immagini/black-widow.jpg'),
('Batman Dark Knight', 2, 65.00, 12, 'Ispirato al film di Nolan.', 'immagini/batman-dark-knight.webp'),
('Joker Ha-Ha', 2, 40.00, 8, 'Versione con base decorata.', 'immagini/joker.webp'),
('Superman', 2, 42.50, 15, 'Eroe di Metropolis design moderno.', 'immagini/superman.jpg'),
('Flash', 2, 38.00, 10, 'Effetti elettrici trasparenti.', 'immagini/flash.webp'),
('Harley Quinn Classic', 2, 30.00, 25, 'Costume da giullare originale.', 'immagini/harley-quinn.webp'),
('Goku Super Saiyan', 3, 25.00, 30, 'Posa d'attacco iconica.', 'immagini/goku.webp');

-- 6. INSERIMENTO ORDINI
INSERT INTO ordini (totale_ordine, indirizzo_spedizione, stato_ordine) VALUES 
(134.90, 'Via Roma 10, Milano', 'consegnato'),
(205.00, 'Piazza del Popolo 1, Roma', 'spedito'),
(70.00, 'Via Dante 12, Firenze', 'in_attesa'),
(120.00, 'Corso Vittorio 5, Torino', 'spedito'),
(55.00, 'Via Garibaldi 8, Napoli', 'consegnato');

-- 7. INSERIMENTO DETTAGLI ORDINI (Collegamento prodotti-ordini)
INSERT INTO dettagli_ordine (id_ordine, id_prodotto, quantita, prezzo_unitario) VALUES 
(1, 1, 1, 45.00), (1, 2, 1, 89.90), -- Ordine 1
(2, 5, 1, 110.00), (2, 17, 1, 95.00), -- Ordine 2
(3, 6, 1, 25.00), (3, 1, 1, 45.00), -- Ordine 3
(4, 4, 1, 120.00), -- Ordine 4
(5, 3, 1, 55.00); -- Ordine 5

-- 8. INSERIMENTO PAGAMENTI
INSERT INTO pagamenti (id_ordine, metodo_pagamento, importo, stato_pagamento) VALUES 
(1, 'carta_credito', 134.90, 'completato'),
(2, 'paypal', 205.00, 'completato'),
(3, 'bonifico', 70.00, 'completato'),
(4, 'paypal', 120.00, 'completato'),
(5, 'carta_credito', 55.00, 'completato');
