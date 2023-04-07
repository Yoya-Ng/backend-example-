const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'instance-1',
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
  connection.query('SELECT * FROM persons', (err, results, fields) => {
    if (err) {
      console.error('Error querying MySQL database: ' + err.stack);
      return;
    }
    res.send(results);
  });
});



app.listen(port, () => {
  console.log('Server listening on port 3001');
})
