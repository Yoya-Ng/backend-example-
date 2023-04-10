const mysql = require('mysql');
const express = require('express')
const app = express()
const port = 80
const cors = require('cors');
app.use(cors());


const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'adminroot',
    database:'test'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

app.get('/hello', (req, res) => {
  res.send('Hello World!!!!!')
})


app.get('/hello2', (req, res) => {
  connection.query('SELECT * FROM name;', (err, results, fields) => {
    if (err) {
      res.send("NONO" + err);
    }
    res.json(results);
  });
});



app.listen(port, () => {
  console.log('Server listening on port '+ {port});
})
