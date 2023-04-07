var mysql = require('mysql');

var connection  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'adminroot',
    database:'test',
    port: 3306
});

module.exports = connection;
