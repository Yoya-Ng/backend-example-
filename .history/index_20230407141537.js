var mysql = require('mysql’);

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs',
    database:'demo_nodejs',
    port: 3306
});