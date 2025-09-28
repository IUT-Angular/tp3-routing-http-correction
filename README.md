# TP3

## Sujet du TP3

1. Transformer la méthode `addBook(book: Book): void` du `BookService` pour gérer les doublons
2. Mettre en place un composant `book-detail` qui récupèrera l'id du livre via l'URL
3. Mettre en place le routing qui va gérer les routes suivantes :
    - / => affichage de la page d'accueil vide
    - /books => affichage de la liste des livres
    - /book/:id => affichage du détail du livre passé en paramètre (lien à afficher dans la liste)
    - /book/add => affichage du formulaire d'ajout d'un livre
4. En plus du stub, charger la liste des livres via l'URL suivante : https://68d41db4214be68f8c6873a3.mockapi.io/books
5. A la validation du formulaire, faire un ajout via l'API précédente.

A noter, que pour la création des composants il n'est pas nécessaire de générer le fichier `.spec.ts` ni le fichier `.css` ou `.scss`

## Correction du TP3

1. Récupération d'un Book een cherchant par ID via la la méthod `Array.find`
2. La récupération de l'ID dans l'URL se fait via `this.activatedRoute.snapshot.params['id'];`
3. Le routing est à détailler dans le fichier `app-routing.module.ts`
4. En angular < 16, le provider `HttpClientModule` doit être inclus dans la section `imports` du fichier `app.module.ts`
5. Utilisation de la méthode `HttpClient.post<Book>(this.bookApiUrl, book)`
6. BONUS : gérer les routes malformées/fausses (erreur ou redirection)

A noter : par défaut les packages `karma` et `jasmine` sont installés. Il sont été retirés de la correction car nous n'avons pas de test de composants.

## Annexes

1. https://angular.dev/guide/routing/common-router-tasks
2. https://angular.dev/guide/http

## Bonnes pratiques

1. Toujours préciser le type de retour d'une méthode
2. Ne jamais utiliser le type `any`
3. Favoriser les interfaces pour les modèles/dto
4. Respecter l'arborescence de fichiers
5. Ne jamais commit ou distribuer le dossier `node_modules`, il faut l'ignorer via le `.gitignore`