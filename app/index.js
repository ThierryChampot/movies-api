// choix du serveur
const port = process.argv[2] || 3000;

// import d'express
const express = require('express');

// import de swagger
const swaggerUi = require("swagger-ui-express"), swaggerDocument = require('../resources/swagger.json');

// Create the application.
const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// import de body-parser
const bodyParser = require('body-parser');

// importer les routeurs
const moviesRouter = require('./routers/moviesRouter');

// importer la connexion à la base de données
const db = require('node-mysql');
const DB = db.DB;
const BaseRow = db.Row;
const BaseTable = db.Table;

// // se connecter à la base de données
const config = require('../config/config');
const box = new DB(config.database);

// // tester la connexion à la base de données
// var basicTest = function(cb) {
//     box.connect(function(conn, cb) {
//         cps.seq([
//             function(_, cb) {
//                 conn.query('select * from genre', cb);
//             },
//             function(res, cb) {
//                 console.log(res);
//                 cb();
//             }
//         ], cb);
//     }, cb);
// };


// attribuer les routes aux routeurs
app.use('/movies', moviesRouter);

// lancement du serveur
app.listen(port, () => console.log(`TEST Server running at http://127.0.0.1:${port}`));
