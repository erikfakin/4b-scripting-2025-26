DROP DATABASE IF EXISTS libreria;

CREATE DATABASE libreria;

USE libreria;

-- Creazione della tabella Autori
CREATE TABLE Autori (
    id_autore INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cognome VARCHAR(100) NOT NULL,
    nazionalita VARCHAR(50),
    anno_nascita INT
);

-- Creazione della tabella Libri
CREATE TABLE Libri (
    id_libro INTEGER PRIMARY KEY AUTO_INCREMENT,
    titolo VARCHAR(255) NOT NULL,
    anno_pubblicazione INT,
    genere VARCHAR(50),
    prezzo DECIMAL(10, 2),
    id_autore INT,
    FOREIGN KEY (id_autore) REFERENCES Autori(id_autore)
);

INSERT INTO Autori (id_autore, nome, cognome, nazionalita, anno_nascita) VALUES 
(5, 'Italo', 'Calvino', 'Italiana', 1923),
(6, 'Fyodor', 'Dostoevsky', 'Russa', 1821),
(7, 'Ernest', 'Hemingway', 'Americana', 1899),
(8, 'Virginia', 'Woolf', 'Britannica', 1882),
(9, 'J.R.R.', 'Tolkien', 'Britannica', 1892),
(10, 'Haruki', 'Murakami', 'Giapponese', 1949),
(11, 'Agatha', 'Christie', 'Britannica', 1890),
(12, 'Franz', 'Kafka', 'Austriaca', 1883),
(13, 'Oscar', 'Wilde', 'Irlandese', 1854),
(14 'Giacomo', 'Leopardi', 'Italiana', 1798);


INSERT INTO Libri (titolo, anno_pubblicazione, genere, prezzo, id_autore) VALUES 
-- Libri di Calvino (ID 5)
('Il barone rampante', 1957, 'Narrativa', 13.00, 5),
('Le città invisibili', 1972, 'Narrativa', 12.50, 5),
('Se una notte d''inverno un viaggiatore', 1979, 'Postmoderno', 14.00, 5),

-- Libri di Dostoevsky (ID 6)
('Delitto e castigo', 1866, 'Filosofico', 16.00, 6),
('L''idiota', 1869, 'Filosofico', 15.50, 6),
('I fratelli Karamazov', 1880, 'Filosofico', 18.00, 6),

-- Libri di Hemingway (ID 7)
('Il vecchio e il mare', 1952, 'Narrativa', 10.00, 7),
('Per chi suona la campana', 1940, 'Guerra', 14.00, 7),

-- Libri di Woolf (ID 8)
('Gita al faro', 1927, 'Modernismo', 11.50, 8),
('Orlando', 1928, 'Biografico', 12.00, 8),

-- Libri di Tolkien (ID 9)
('Il Signore degli Anelli', 1954, 'Fantasy', 25.00, 9),
('Lo Hobbit', 1937, 'Fantasy', 13.50, 9),

-- Libri di Murakami (ID 10)
('Norwegian Wood', 1987, 'Drammatico', 14.50, 10),
('Kafka sulla spiaggia', 2002, 'Surreale', 16.00, 10),

-- Libri di Agatha Christie (ID 11)
('Assassinio sull''Orient Express', 1934, 'Giallo', 11.00, 11),
('Dieci piccoli indiani', 1939, 'Giallo', 10.50, 11),

-- Libri di Kafka (ID 12)
('La metamorfosi', 1915, 'Esistenzialista', 8.50, 12),
('Il processo', 1925, 'Drammatico', 12.00, 12),

-- Libri di Wilde (ID 13)
('Il ritratto di Dorian Gray', 1890, 'Gotico', 9.00, 13),

-- Libri di Leopardi (ID 14)
('Canti', 1831, 'Poesia', 13.00, 14);