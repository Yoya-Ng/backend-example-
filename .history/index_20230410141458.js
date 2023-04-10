// 引入 express 並使用
const express = require('express');
const app = express();
app.get('/', function(req, res){
  res.send('Hello World');
});
// 監聽本地端 3000 port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});