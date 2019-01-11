'use strict';
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

console.log(path.resolve('./public/src/index.html'));

// 路由
app.get('/', (req, res) => {
  fs.readFile(path.resolve('./public/src/index.html'), (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('page not found')
    } else {
      res.end(data)
    }
  })
});

// 端口
app.listen(8081, () => {
  console.log('express is listening')
});
