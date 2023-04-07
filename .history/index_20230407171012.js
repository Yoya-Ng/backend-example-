var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'adminroot',
    database:'test',
    port: 3306
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
  
    connection.query('SELECT * FROM users', function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

conn.end();