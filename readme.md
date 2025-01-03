# TypeScript (TS)

## Objectif du langage TS ?
- Ajouter du typage statique *(Durant le dev)*
- Facilité la maintenence des projets
  - Typage des variables et des fonctions
  - Erreurs liées au typage (IDE)
  - Meilleur "qualité" de code
- Implementation de l'orienté objet

## Utilisation du TS
- Utilisation direct: \
  *Quand l'environment le support : bun.js / deno*
- Transcompilation: \
  *Transformation du code **TypeScript** en **JavaScript***

## Mise en place dans cette démo
Réaliser une page Web avec le code en TypeScript. \
Utilisation de **node.js** pour transcompiler le code : 
 - Initialiser un projet "node"
 - Installer la dépendence pour « TypeScript »
 - Configurer le language TS

### Etape 1 : Création du projet
```
# Initialisation d'un projet avec Node.js
npm init

# Installation de typescript
npm i typescript --save-dev

# Création des fichiers index.html et script.ts

# Lancer la transcompilation
npx tsc src/script.ts
```
Sans configuration :
- On doit lancer la commande de transcompilation avec le fichier cible
- Le code JS est basé sur l'ECMAScript 3 (1999) !!!

### Etape 2 : Configurer le language « TypeScript »
Documentation du tsconfig : https://www.typescriptlang.org/tsconfig/
```
# Génération du fichier de config
npx tsc --init 

# Transcompilation avec la config
npx tsc             # A la demande
npx tsc --watch     # En continu
```

Ajout des commandes de typescript dans la configuration du projet \
Modifier le fichier package.json pour y ajouter le code suivante : 

```json
{
  {
    "scripts": {
      "compile": "tsc",
      "watch": "tsc --watch",
      ...
  },
  ...
}
```



## Ressource
- https://www.typescriptlang.org/
- https://fr.wikipedia.org/wiki/TypeScript