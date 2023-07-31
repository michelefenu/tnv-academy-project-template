Progetto finale X Edizione TNV Academy per Full Stack Web Developer

Team:

Andrea Loviselli
Davide Lo Cascio
Giorgia Grisi

Nome: Guess The Movie

Realizzare un’applicazione web che recuperi casualmente un film attaverso un’API esterna e lo proponga
all’utente nascondendo tutti i suoi campi tra cui la locandina (almeno 5, come ad esempio: titolo, genere,
attori, anno di uscita, rating, lingua, …). Film senza locandina devono essere esclusi.
L’utente attraverso un pulsante “Inizia gioco” farà partire il timer e potrà indicare in un campo di input
dedicato il titolo del film. L’utente potrà, cliccando sui singoli campi (ad eccezione del titolo), svelare il suo
contenuto. Ogni campo svelato dovrà incrementare il timer di 30 secondi.
Una volta indovinato l’utente potrà scegliere se salvarlo nella lista dei preferiti, e in tal caso dovrà dare un
voto al film e inserire una breve recensione di massimo 160 caratteri. Per ogni film dovrà essere registrato il
tempo impiegato per indovinare il film. Tale lista dovrà essere visibile nell’applicazione stessa e dovrà essere
possibile eliminare i film.
L’accesso al sistema dovrà avvenire attraverso un servizio di BE Springboot.
L’inserimento della review dovrà essere effettuato con un servizio di BE in Node.js.

Come sincronizzare tutto:

Scaricare il file .zip e creare 2 database con MySql,

Database per SpringBoot:

CREATE DATABASE gtm_users;

USE gtm_users;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  surname VARCHAR(255) NOT NULL,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL
);

Database per Node:

CREATE DATABASE gtm_reviews;

use gtm_reviews;

CREATE TABLE ratings (
  idReview INT AUTO_INCREMENT PRIMARY KEY,
  userId INT,
  movieId INT,
  rating INT,
  review VARCHAR(255),
  totalTime INT,
  movieTitle VARCHAR(225),
  moviePoster VARCHAR(225),
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

Front-end:

Angular = Viene utilizzato per gestire tutte le logiche del lato client e le rotte HTML.

Settaggio Angular = Aprire il terminale, andare nella cartella Angular ed eseguire il comando "npm install" per installare le dipendenze npm e il comando "ng serve" per avviare il server.

Back-end:

Spring Boot = Viene utilizzato come API per la registrazione e il login dell'utente. (DB gtm_users)

Settaggio Spring Boot = Utilizzare IntelliJ per aprire il progetto nella cartella Spring Boot e far partire il programma dal main (cambiare la password di MySql con la propria nel file application.properties).

Node.js = Viene utilizzato come API per gestire la lista dei preferiti e le recensioni. (DB gtm_reviews)

Settaggio Node.js = Aprire il terminale, andare nella cartella Node ed eseguire il comando "npm install" per installare le dipendenze npm e il comando "nodemon server.js" per avviare il server (cambiare la password di MySQL con la propria nel file config.js).

API esterna per film:

https://www.themoviedb.org/ <----- Da questo sito abbiamo un database di film da utilizzare nel gioco.


