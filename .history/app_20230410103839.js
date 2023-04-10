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

connection.ping((err) => {
  if (err) {
    console.error('error connecting: ' + err);
  } else {
    console.log('connected OKOK');
  }
});

app.get('/DB', (req, res) => {
  connection.ping((err) => {
    if (err) {
      res.send('error connecting: ' + err);
    } else {
      res.send('connected OKOK');
    }
  });
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
