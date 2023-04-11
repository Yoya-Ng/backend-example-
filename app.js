const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'adminroot',
  database: 'test'
});

async function asyncFunction() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM yourtable');
    console.log(rows);
  } catch (err) {
    console.error('error connecting: ' + err);
  } finally {
    if (conn) return conn.end();
  }
}

asyncFunction();

// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error('error connecting: ' + err);
//     return;
//   } else {
//     console.log("pool Connected!");
//   }
// });

// const connection = mysql.createConnection({
//   host: 'http://localhost:3306',
//   user: 'root',
//   password: 'adminroot',
//   database: 'test',
//   port: '3306',
//   socketPath: '/run/mysqld/mysqld.sock'
// });
// function handleerror() {

//   connection.connect(function (err) {
//     if (err) {
//       console.error('error connecting: ' + err);
//       setTimeout(handleerror, 2000);
//     } else {
//       console.log("Connected!");
//     }
//   });

//   connection.on('error', function (err) {
//     if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//       handleerror();
//     }
//   })
// }
// handleerror();
// connection.query('SELECT * FROM name', (err, results, fields) => {
//   if (err) {
//     console.log("Connected!", err);
//   }
//   console.log("Connected!", results);
// });


// // 引入 express 並使用
const express = require('express');
const app = express();
// const cors = require('cors');
// app.use(cors());
// app.get('/hello', (req, res) => {
//   res.send('Hello World!!!!!')
// });

// app.get('/hello2', function (req, res) {
//   // 接上連接池
//   pool.getConnection((err, connection) => {
//     if (err) {
//       console.error('error connecting: ' + err);
//       return;
//     } else {
//       console.log("Connected!");
//     }
//   });
// });

// app.get('/hello3', function (req, res) {
//   // 接上連接池
//   pool2.getConnection((err, connection) => {
//     if (err) {
//       console.error('error connecting: ' + err);
//       return;
//     } else {
//       console.log("Connected!");
//     }
//   });
// });

// app.get('/hello4', function (req, res) {
//   // 接上連接池
//   pool3.getConnection((err, connection) => {
//     if (err) {
//       console.error('error connecting: ' + err);
//       return;
//     } else {
//       console.log("Connected!");
//     }
//   });
// });

// app.get('/hello5', function (req, res) {
//   // 接上連接池
//   pool4.getConnection((err, connection) => {
//     if (err) {
//       console.error('error connecting: ' + err);
//       return;
//     } else {
//       console.log("Connected!");
//     }
//   });
// });

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
