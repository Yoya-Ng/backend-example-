const mysql = require('mysql');
const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');
app.use(cors());


const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'adminroot',
    database:'test'
});

var query = function(sql, options, callback) {
  console.log(sql, options, callback);
  if (typeof options === "function") {
      callback = options;
      options = undefined;
  }
  pool.getConnection(function(err, conn){
      if (err) {
          callback(err, null, null);
      } else {
          conn.query(sql, options, function(err, results, fields){
              // callback
              callback(err, results, fields);
          });
          // release connection。
          // 要注意的是，connection 的釋放需要在此 release，而不能在 callback 中 release
          conn.release();
      }
  });
};

module.exports = query;

app.get('/hello', (req, res) => {
  res.send('Hello World!!!!!')
})


app.get('/hello2', (req, res) => {
  pool.query('SELECT * FROM name', (err, results, fields) => {
    if (err) {
      res.send("NONO" + err);
    }
    res.json(results);
  });
});



app.listen(port, () => {
  console.log('Server listening on port 3001');
})
