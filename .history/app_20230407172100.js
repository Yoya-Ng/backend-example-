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
  db.query('SELECT * FROM persons;', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/hello3', (req, res) => {
  // 選擇資料庫
  db.query('USE test;', function (error, results, fields) {
    if (error) throw error;
    // 執行 SQL 語句
    db.query('SELECT * FROM persons;', function (error, results, fields) {
      if (error) throw error;
      console.log(results);
    });
  });
});




app.listen(port, () => {
  console.log('Server listening on port 3001');
})
