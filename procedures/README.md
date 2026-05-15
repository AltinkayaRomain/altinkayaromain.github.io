# 📋 Procédures TSSR

## Guide d'utilisation

Ce dossier contient vos procédures d'installation et de configuration de services.

### 📝 Comment ajouter une procédure ?

1. **Placez votre fichier PDF ou DOCX** dans ce dossier `procedures/`
   - Exemple: `procedures/install_postgresql.pdf`

2. **Mettez à jour `procedures/index.json`** en ajoutant une entrée :

```json
{
  "id": 7,
  "title": "Installation PostgreSQL sur Debian 12",
  "category": "Linux",
  "description": "Installation et configuration complète de PostgreSQL avec sauvegarde quotidienne.",
  "filename": "install_postgresql.pdf",
  "size": "1.5 Mo",
  "date": "2026-05-15"
}
```

### 📂 Catégories disponibles

- Supervision
- Linux
- Windows
- Réseau
- Sécurité
- Virtualisation
- Messagerie
- Déploiement
- Autre

### 🎯 Notes importantes

- Le `filename` **doit correspondre exactement** au nom de votre fichier dans le dossier
- L'`id` doit être unique
- La `date` doit être au format `YYYY-MM-DD`
- Les fichiers apparaissent automatiquement sur la page `procedures.html`
