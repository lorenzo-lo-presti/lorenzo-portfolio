# Portfolio & Learning Hub — Public

Repo **PUBBLICO** per portfolio e learning selezionato.
Creato: 2025-09-05

## Prerequisiti

- [Node.js](https://nodejs.org/) 16 o superiore
- [npm](https://www.npmjs.com/) 8 o superiore

## Sviluppo locale

```bash
npm install
npm start
```

Questo avvia un server di sviluppo su `http://localhost:3000`.

## Deploy

- Ogni push sul branch `main` esegue il workflow GitHub Actions che costruisce e pubblica il sito su GitHub Pages.
- Per un deploy manuale è disponibile lo script:

```bash
npm run deploy
```

## Dominio personalizzato

Per utilizzare un dominio personalizzato creare o aggiornare il file `static/CNAME` con il dominio desiderato e aggiornare il campo `url` in `docusaurus.config.js`.
