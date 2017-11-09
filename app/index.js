// choix du serveur
const port = process.argv[2] || 3000;

// import d'express
const express = require('express');

// instanciation de l'objet express
const app = express();

// import de fs
const fs = require('fs');

// import de path
const path = require('path');

// import de body-parser
const bodyParser = require('body-parser');

// inclure les controleurs 
const moviesCtrl = require('./controllers/moviesCtrl');
const moviesCtrl = new moviesCtrl();

// réponse à l'url "/movies"
app.get('/movies', moviesCtrl.getMovies.bind(moviesCtrl));

// lancement du serveur
app.listen(port, () => console.log(`TEST Server running at http://127.0.0.1:${port}`));
