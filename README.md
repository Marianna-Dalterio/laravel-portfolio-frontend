## Laravel Portfolio - Front-end (React)
Questa è l'applicazione front-end del mio progetto Portfolio. L'app è stata realizzata con React per offrire un'esperienza di navigazione fluida e dinamica, interfacciandosi con un back-end sviluppato in Laravel tramite chiamate API.

## 📸 Panoramica
L'applicazione permette a qualsiasi visitatore di sfogliare i miei progetti e visualizzarne i dettagli completi.

![Lista progetti](./screenshots/Lista%20progetti.jpg)

## ✨ Funzionalità
- Visualizzazione Progetti: Lista dinamica dei progetti recuperata in tempo reale dal database.

- Rotte Dinamiche: Pagine di dettaglio per ogni singolo progetto gestite tramite React Router.

- Integrazione API: Comunicazione fluida con il back-end Laravel tramite Axios.

- Interfaccia Responsive: Design ottimizzato per dispositivi mobile e desktop.

## 🧠 Cosa ho imparato
Realizzare il front-end per un progetto API-based mi ha permesso di approfondire:

- Consumo di API: Gestione delle chiamate e gestione dei caricamenti (Loading states).

- State Management: Utilizzo degli Hook (come useState e useEffect) per gestire i dati provenienti dal server.

- Routing: Implementazione di una navigazione Single Page Application (SPA) senza ricaricamento della pagina.

- Configurazione CORS: Risoluzione delle problematiche di sicurezza nella comunicazione tra domini diversi (localhost:8000 vs localhost:5173).

## 🛠️ Stack Tecnologico
- React: Libreria principale per la costruzione dell'interfaccia.

- React Router: Per la gestione della navigazione tra le pagine.

- Axios: Per le richieste HTTP verso il server Laravel.

- Bootstrap: Per lo styling dei componenti.

 ## 💻 Come avviare l'app localmente
1.  Clona la repository:

Bash

git clone [https://github.com/Marianna-Dalterio/laravel-portfolio-frontend.git]

2. Installa le dipendenze:

Bash

npm install

3. Configura l'indirizzo dell'API (solitamente in un file .env o in un file di configurazione globale):

JavaScript

VITE_API_URL=http://127.0.0.1:8000/api

4. Avvia il server di sviluppo:

Bash

npm run dev

---
## 🔗 Repository Collegato
Per il corretto funzionamento, questa applicazione richiede che il back-end sia attivo:

Back-end (Laravel): [Vai al Repository Backend Laravel-Portfolio -> ](https://github.com/Marianna-Dalterio/laravel-portfolio.git) – Repository contenente il CMS, il database e l'endpoint delle API.

---