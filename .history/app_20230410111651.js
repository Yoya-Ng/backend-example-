const mysql = require('mysql');
const express = require('express')
const app = express()
const port = 80
const cors = require('cors');
app.use(cors());


const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'user',
    password: 'admintest',
    database:'test',
    connectionLimit: 10
  });

const connection2 = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'admintest',
  database:'test',
  connectionLimit: 10
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err);
  } else {
  console.log("Connected!");
  }
});

connection.ping((err) => {
  if (err) {
    console.error('error connecting: ' + err);
  } else {
    console.log('connected OKOK');
  }
});

connection2.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err);
  } else {
    console.log("Connected!2");
    }
});

connection2.ping((err) => {
  if (err) {
    console.error('error connecting2: ' + err);
  } else {
    console.log('connected2 OKOK');
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
