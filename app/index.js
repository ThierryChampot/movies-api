// choix du serveur
const port = process.argv[2] || 3000;

// import d'express
const express = require('express');

// instanciation de l'objet express
const app = express();

// import de body-parser
const bodyParser = require('body-parser');

// importer les routeurs
const moviesRouter = require('./routers/moviesRouter');

// attribuer les routes aux routeurs
app.use('/movies', moviesRouter);

// lancement du serveur
app.listen(port, () => console.log(`TEST Server running at http://127.0.0.1:${port}`));

