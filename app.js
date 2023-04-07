const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'adminroot',
    database:'test',
    port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});


const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');


app.use(cors());

app.get('/hello', (req, res) => {
  res.send('Hello World!!!!!')
})


app.get('/hello2', (req, res) => {
  connection.query('SELECT * FROM users', (err, results, fields) => {
    if (err) {
      console.error('Error querying MySQL database: ' + err.stack);
      return;
    }
    res.send(results);
  });
});

app.get('/hello3', (req, res) => {
  // 選擇資料庫
  connection.query('USE test;', function (error, results, fields) {
    if (error) throw error;
    // 執行 SQL 語句
    connection.query('SELECT * FROM persons;', function (error, results, fields) {
      if (error) throw error;
      console.log(results);
    });
  });
});



app.listen(port, () => {
  console.log('Server listening on port 3001');
})
