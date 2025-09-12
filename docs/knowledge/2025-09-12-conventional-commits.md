# Convenzioni di Commit (Conventional Commits)  
📅 2025-09-12 · 🏷️ git, commits, workflow  

---

## 🚩 Problema
Commit scritti in modo disordinato e poco chiaro → difficile capire lo storico del progetto.

---

## ✅ Soluzione
Adottare lo standard **Conventional Commits**:  
```
<type>: <descrizione breve>
```

### Tipi principali
- `feat:` → nuova funzionalità  
- `fix:` → correzione di bug  
- `docs:` → documentazione  
- `style:` → formattazione, spazi, punti e virgola  
- `refactor:` → modifica al codice che non cambia il comportamento  
- `test:` → aggiunta o modifica test  
- `chore:` → attività varie (build, dipendenze, config)  

Esempi:  
```bash
git commit -m "feat: aggiungi sezione Knowledge Base"
git commit -m "fix: correggi errore navbar.position"
git commit -m "docs: aggiorna README con istruzioni di deploy"
```

---

## 🎯 Risultato
✔️ Log dei commit chiaro e leggibile.  
✔️ Facilità di generare changelog automatici.  

---

## 🔗 Fonti
- 📄 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)  
