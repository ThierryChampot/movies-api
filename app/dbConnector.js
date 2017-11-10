const mysql      = require('mysql');
const database = require('../config/config').database;
const connection = mysql.createConnection(database);

connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
    });

module.exports = connection;
