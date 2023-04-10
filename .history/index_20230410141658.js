const mysql = require('mysql');
const pool = mysql.createPool({
connectionLimit: 10,
host: 'localhost',
user: 'user',
password: 'admintest',
database: 'test'
});

// 引入 express 並使用
const express = require('express');
const app = express();
app.get('/hello', (req, res) => {
  res.send('Hello World!!!!!')
});

// 監聽本地端 3000 port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

