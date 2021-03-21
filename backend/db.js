const config = require('./config');
const mysql = require('mysql');

const database = mysql.createPool(config);

database.getConnection((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Successfully connected to database');
    }
});

module.exports = database;
