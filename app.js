const mysql = require('mysql');
const pool = mysql.createPool({
  socketPath: '/run/mysqld/mysqld.sock', // 有關連線登入的位置
  host: 'localhost',
  user: 'root',
  password: 'adminroot',
  database: 'test'
});

// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error('Error connecting to MariaDB: ' + err.stack);
//     return;
//   }
//   console.log('Connected to MariaDB as ID ' + connection.threadId);

//   connection.release(); // 釋放連接
//   // pool.end(); // 關閉連接池
// });

// // 引入 express 並使用
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
//node.js用來解析body的資料
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//解決跨網域問題
app.use(cors());

app.get('/hello', (req, res) => {
  console.log('hello');
  res.send('Hello World!!!!!')
});

app.get('/hello2', function (req, res) {
  // 接上連接池
  pool.getConnection((err, connection) => {
    console.log('Connected to MariaDB as ID ' + connection.threadId);
    connection.query('SELECT * FROM name', (error, results, fields) => {
      if (error) {
        console.log('NONO' + error);
        res.send("NONO" + error);
      }
      console.log(results);
      res.json(results);
    });
    connection.release(); // 釋放連接
  });

});

app.get('/users', function (req, res) {
  // 接上連接池
  pool.getConnection((err, connection) => {
    console.log('Connected to MariaDB as ID ' + connection.threadId);
    connection.query('SELECT * FROM users', (error, results, fields) => {
      if (error) {
        res.send("NONO" + error);
      }
      res.json(results);
    });
    connection.release(); // 釋放連接
  });

});

app.put('/users', (req, res) => {
  console.log(req.body);
  const reqjson = JSON.parse(JSON.stringify(req.body));
  console.log(reqjson);
  console.log(reqjson.name);
  let values = [[reqjson.name,reqjson.isVerified,reqjson.role,reqjson.classNumber]];

  // 接上連接池
  pool.getConnection((err, connection) => {
    console.log('Connected to MariaDB as ID ' + connection.threadId);
    connection.query('INSERT INTO users (name,isVerified,role,classNumber) VALUES ?',[values], (error, results, fields) => {
      if (error) {
        res.send("NONO" + error);
      }
      res.json(results);
    });
    connection.release(); // 釋放連接
  });

});


// 監聽本地端 3000 port
const port = 80;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});



// const mysql = require('mysql');



// const connection = mysql.createConnection({
//   socketPath: '/var/run/mysqld/mysqld.sock',
//   user: 'user',
//   password: 'admintest',
//   database: 'test'
// });

// const connection2 = mysql.createConnection({
//   socketPath: '/usr/sbin/mysqld/mysqld.sock',
//   user: 'root',
//   password: 'adminroot',
//   database: 'test'
// });

// connection.connect(function (err) {
//   if (err) {
//     console.error('error connecting: ' + err);
//   } else {
//     console.log("Connected!");
//   }
// });

// connection.ping((err) => {
//   if (err) {
//     console.error('error connecting: ' + err);
//   } else {
//     console.log('connected OKOK');
//   }
// });

// connection2.connect(function (err) {
//   if (err) {
//     console.error('error connecting2: ' + err);
//   } else {
//     console.log("Connected!2");
//   }
// });

// connection2.ping((err) => {
//   if (err) {
//     console.error('error connecting2: ' + err);
//   } else {
//     console.log('connected2 OKOK');
//   }
// });

// app.get('/DB', (req, res) => {
//   connection.ping((err) => {
//     if (err) {
//       res.send('error connecting: ' + err);
//     } else {
//       res.send('connected OKOK');
//     }
//   });
// });

// app.get('/hello2', (req, res) => {
//   connection.query('SELECT * FROM name;', (err, results, fields) => {
//     if (err) {
//       res.send("NONO" + err);
//     }
//     res.json(results);
//   });
// });



// app.listen(port, () => {
//   console.log('Server listening on port ' + { port });
// })
