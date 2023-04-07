const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');
const db = require('./db');


app.use(cors());

app.get('/hello', (req, res) => {
  res.send('Hello World!!!!!')
})


app.get('/hello2', (req, res) => {
  db.query('SELECT * FROM users', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log('Server listening on port 3001');
})
