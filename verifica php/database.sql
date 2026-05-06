CREATE DATABASE IF NOT EXISTS esercizio_ristorante;
USE esercizio_ristorante;

-- Tabella Categorie
CREATE TABLE categorie (
    id INT PRIMARY KEY,
    nome_categoria VARCHAR(50),
    colore_esadecimale VARCHAR(7)
);

-- Tabella Piatti
CREATE TABLE piatti (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_piatto VARCHAR(50),
    prezzo DECIMAL(5,2),
    url_immagine VARCHAR(255),
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES categorie(id)
);

-- Inserimento Categorie 
INSERT INTO categorie (id, nome_categoria, colore_esadecimale) VALUES
(1, 'Pizze', '#a6ebcd'), 
(2, 'Paste', '#fff3ad'),   
(3, 'Dolci', '#fed3fd'); 

-- Inserimento di 10 Piatti
INSERT INTO piatti (nome_piatto, prezzo, url_immagine, id_categoria) VALUES
-- Categoria: Pizze
('Margherita Reale', 9.00, 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 1),
('Diavola Infuocata', 11.50, 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 1),
('Pistacchiosa e Mortazza', 14.00, 'https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 1),
('Bufala e Crudo', 13.00, 'https://plus.unsplash.com/premium_photo-1733266807710-f8f8de34416f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 1),

-- Categoria: Paste
('Carbonara Imperiale', 12.00, 'https://images.unsplash.com/photo-1577996943427-df52c1fb01b1?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 2),
('Pappardelle al Ragu Bianco', 15.00, 'https://images.unsplash.com/photo-1686140338754-2ff9e6b9d467?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 2),
('Paccheri allo Scoglio', 18.00, 'https://images.unsplash.com/photo-1632389762435-8c53185e40ae?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 2),
('Gnocchi al Castelmagno', 14.50, 'https://images.unsplash.com/photo-1621340434481-f2a3db584ea6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 2),

-- Categoria: Dolci
('Tiramisù della Nonna', 7.00, 'https://plus.unsplash.com/premium_photo-1695028377770-6cc9d957e1e4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 3),
('Cheesecake ai Frutti di Bosco', 6.50, 'https://plus.unsplash.com/premium_photo-1726718701835-fa909e58589e?q=80&w=1125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 3);