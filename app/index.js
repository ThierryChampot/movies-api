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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// import de body-parser
const bodyParser = require('body-parser');

// importer les routeurs
const moviesRouter = require('./routers/moviesRouter');
const genresRouter = require('./routers/genresRouter');
const peopleRouter = require('./routers/peopleRouter');
const reviewRouter = require('./routers/reviewRouter');

// const mysql      = require('mysql');
// const database = require('../config/config').database;
// const connection = mysql.createConnection(database);

// connection.connect(function(err){
//     if(!err) {
//         console.log("Database is connected ... nn");    
//     } else {
//         console.log("Error connecting database ... nn");    
//     }
//     });
    
//     app.get("/",function(req,res){
//     connection.query('SELECT * from movie LIMIT 20', function(err, rows, fields) {
//     connection.end();
//       if (!err)
//         console.log('The solution is: ', rows);
//       else
//         console.log('Error while performing Query.');
//       });
//     });

// attribuer les routes aux routeurs
app.use('/movies', moviesRouter);
app.use('/genres', genresRouter);
app.use('/people', peopleRouter);
app.use('/reviews', reviewRouter);

// lancement du serveur
app.listen(port, () => console.log(`TEST Server running at http://127.0.0.1:${port}`));
