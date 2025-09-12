# Deploy Docusaurus su GitHub Pages  
📅 2025-09-12 · 🏷️ github, docusaurus, deploy  

---

## 🚩 Problema
Come pubblicare un sito Docusaurus su GitHub Pages senza errori di build e deploy.

---

## ✅ Soluzione
1. In `docusaurus.config.js` configurare:
   ```js
   url: "https://lorenzo-lo-presti.github.io",
   baseUrl: "/lorenzo-portfolio/",
   trailingSlash: false,
   onBrokenLinks: "throw",
   onBrokenMarkdownLinks: "warn"
   ```
2. Workflow GitHub Actions:
   ```yaml
   name: Deploy Docusaurus to GitHub Pages

   on:
     push:
       branches: ["main"]

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 18
         - run: npm install
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: build

     deploy:
       runs-on: ubuntu-latest
       needs: build
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - id: deployment
           uses: actions/deploy-pages@v4
   ```

---

## 🎯 Risultato
✔️ Build e deploy automatico su `gh-pages`.  
✔️ Nessun errore di identità Git o link rotti.

---

## 🔗 Fonti
- 📄 [Docusaurus Deployment Docs](https://docusaurus.io/docs/deployment)  
- 📄 [GitHub Pages Actions Docs](https://docs.github.com/en/actions/deployment/deploying-to-your-sites)  
