# Modelsis-frontend-angular
## 1- Introduction : 
Ce projet a ete crée pour repondre aux besoins du test technique de Modelsis Sénégal.
Il s'agit ici d'une application Angular de gestion de Produit qui permet de faire les operations suivantes : 
* Creer un type de Produit
* Creer un Produit en lui associant un Type de produit
* Modifier un Produit
* Lister les produits 
## 2- Stack utilisé : 
* npm (node package manager) : 6.14.8
* Node : 14.15.0
* Angular CLI : 10.2.4
* Angular : 10.2.5
* RxJs : 6.6.7
* Typescript : 4.0.8
* Serveur Heroku pour deploiement
* Github pour versionnement fichier   
## 3- Excecuter le projet : 
* Installer les dependances en se placant sur la racine du projet </br>
  `npm install`
* Builder le projet  </br>
`ng build --base-href ./`
* tester en local :
  - Installer Http-server avec npm  </br>
    `npm i http-server` </br>
  - Demarrer le projet en local </br>
    a- se placer sur le repertoire apres l'etape build  : dist/app-product </br>
    b- excuter la commande </br>
      `http-server`
## 4- Lien de test Heroku 
      https://app-product-frontend.herokuapp.com
