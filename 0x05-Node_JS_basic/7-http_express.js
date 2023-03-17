const express = require('express');
const countStudents = require('./3-read_file_async');

const db = process.argv.length > 2 ? process.argv[2] : '';

const app = express();

const PORT = 1245;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const msg = 'This is the list of our students\n';
  try {
    const students = await countStudents(db);
    res.send(`${msg}${students.join('\n')}`);
  } catch (error) {
    res.send(`${msg}Cannot load the database`);
  }
});

app.listen(PORT, (err) => {
  if (!err) console.log(`express server is running on port: ${PORT}`);
  else { console.log('error happened!'); }
});
module.exports = app;
