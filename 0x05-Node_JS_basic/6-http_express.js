const express = require('express');

const app = express();

const PORT = 1245;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.listen(PORT, (err) => {
  if (!err) console.log(`express server is running on port: ${PORT}`);
  else { console.log('error happened!'); }
});
module.exports = app;
