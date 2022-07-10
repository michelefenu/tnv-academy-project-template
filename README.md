# Movie Genius

Progetto finale TNV composto da un frontend Angular e tre backend:

- Springboot: per la registrazione e login
- NodeJS: salvataggio e recupero classifica e preferiti
- .NET: salvataggio e recupero commento di un preferito

## Avviare progetto

Seguire le seguenti istruzioni:

### 1. Avviare database

1. Aprire xampp
2. Avviare mysql e apache

### 2. Avviare springboot (login e registrazione)

1. cd .\SpringBoot\
2. .\gradlew bootRun
3. porta 8080
4. tabella mysql "user"

### 2. Avviare angular

1. cd .\Angular\
2. npm run start (oppure ng serve)
3. porta 4200

### 3. Avviare node (classifica e preferiti)

1. cd .\Node\
2. npm run start
3. porta 1234
4. tabella mysql "ratings"

### 4. Avviare dotnet (commenti film preferiti)

1. cd .\.NET\src\restapi\
2. dotnet run
3. porta 5286
4. tabella mysql "comments"

## Dati mysql

1. porta 3306
2. database tnv-final-project
3. user: root
4. no password
