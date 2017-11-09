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

// MYSQL
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'YOUR_USERNAME',
  password : 'YOUR_PASSWORD',
  database : 'THE_DATABASE_NAME'
});

connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn");    
    } else {
        console.log("Error connecting database ... nn");    
    }
    });
    
    app.get("/",function(req,res){
    connection.query('SELECT * from movie LIMIT 20', function(err, rows, fields) {
    connection.end();
      if (!err)
        console.log('The solution is: ', rows);
      else
        console.log('Error while performing Query.');
      });
    });

// attribuer les routes aux routeurs
app.use('/movies', moviesRouter);

// lancement du serveur
app.listen(port, () => console.log(`TEST Server running at http://127.0.0.1:${port}`));
