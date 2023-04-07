var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'adminroot',
    database:'test',
    port: 3306
});

conn.connect();

conn.query('SELECT 12 + 34 AS result', function(err, rows, fields) {
    if (err) throw err;
    console.log('The result is: ', rows[0].result);
}); 

conn.end();