# OnePiece Cards Demo

## Descrizione

Una web app semplice e d'impatto che utilizza un finto database basato su file JSON per:

* Visualizzare la lista completa delle carte di One Piece con filtri per nome, tipo, rarità, costo di gioco, colore e famiglia.
* Mostrare la collezione personale dell'utente (pagina 2).

## Stack Tecnologico

* **React**: libreria principale per la UI.
* **Vite**: bundler rapido con hot reload.
* **Tailwind CSS**: utility-first CSS framework per styling veloce.
* **React Router** (`react-router`): routing moderno con Data API.
* **Flowbite React**: libreria di componenti React basata su Tailwind (Select, TextInput, ecc.).
* **JSON**: finto database (file `src/assets/cardsList.json` importato come modulo).

## Avvio del Progetto

1. Clona il repository e spostati nella cartella:

   ```bash
   git clone <url>
   cd onepiece-demo
   ```
2. Installa le dipendenze:

   ```bash
   npm install
   ```
3. Avvia il dev server:

   ```bash
   npm run dev
   ```
4. Apri il browser su [http://localhost:5173](http://localhost:5173)

## Prossimi Step

* Implementare la pagina **Collection** con filtro e salvataggio locale.
* Gestire la creazione e modifica dei deck dell'utente (pagina 3).
* Aggiungere animazioni leggere con GSAP.

---

*Progetto rapidissimo per imparare competenze React, routing moderno e styling con Tailwind.*
