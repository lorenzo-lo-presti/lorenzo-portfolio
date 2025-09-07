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

### Automazione

Ogni push sul branch `main` esegue il workflow GitHub Actions che costruisce il sito e lo pubblica sul branch `gh-pages` tramite il token `GITHUB_TOKEN` fornito da GitHub.

### Configurazione

1. Abilitare GitHub Pages dalla sezione **Pages** delle impostazioni del repo scegliendo il branch `gh-pages`.
2. Non è necessario creare un token personale per la CI: il workflow utilizza automaticamente `secrets.GITHUB_TOKEN` con permesso `contents: write`.
3. Per eseguire un deploy manuale da locale è necessario un token personale con permesso `repo` e impostare le variabili d'ambiente:

   ```bash
   export GIT_USER=<username>
   export GITHUB_TOKEN=<personal-access-token>
   npm run deploy
   ```

Lo script `npm run deploy` utilizza il branch `gh-pages` grazie alla variabile `DEPLOYMENT_BRANCH` configurata nello script.

## Dominio personalizzato

Per utilizzare un dominio personalizzato creare o aggiornare il file `static/CNAME` con il dominio desiderato e aggiornare il campo `url` in `docusaurus.config.js`.
