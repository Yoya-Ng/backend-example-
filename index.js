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

app.get('/hello2', function(req, res){
    // 接上連接池
    pool.getConnection((err, connection) => {
      if (err) throw err;
      // 輸入 SQL 語法查詢
      connection.query('SELECT * FROM name limit 1',   
      (err, rows, fields) => {
        if (err) throw err;
        // 送出查詢結果
        res.send(rows);
        // 斷開連結
        connection.release();
      });
    });
  });

// 監聽本地端 3000 port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

