const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'adminroot',
    database:'test',
    socketPath: '/tmp/mysql.sock',
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
  connection.query('SELECT * FROM name', (err, results, fields) => {
    if (err) {
      res.send("NONO" + err);
    }
    res.json(results);
  });
});



app.listen(port, () => {
  console.log('Server listening on port 3001');
})
