# Errore `navbar.position` in Docusaurus  
📅 2025-09-12 · 🏷️ docusaurus, config, bugfix  

---

## 🚩 Problema
Errore di build: `"navbar.position is not allowed"` quando si configurava la navbar di Docusaurus.

---

## ✅ Soluzione
- Rimuovere la proprietà non valida `navbar.position`.  
- Ogni item della navbar deve avere solo proprietà supportate (`label`, `to`, `href`, `items`, ecc.).  
- Struttura corretta:
  ```js
  themeConfig: {
    navbar: {
      title: "Lorenzo Portfolio",
      items: [
        { to: "/docs/intro", label: "Docs", position: "left" },
        { to: "/knowledge", label: "Knowledge Base", position: "left" },
        { href: "https://github.com/lorenzo-lo-presti", label: "GitHub", position: "right" }
      ]
    }
  }
  ```

---

## 🎯 Risultato
✔️ Build completata senza errori.  
✔️ Navbar funzionante con link corretti.  

---

## 🔗 Fonti
- 📄 [Docusaurus Config Reference](https://docusaurus.io/docs/api/themes/configuration)  
