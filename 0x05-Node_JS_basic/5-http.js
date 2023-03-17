const http = require('http');
const countStudents = require('./3-read_file_async');

const db = process.argv.length > 2 ? process.argv[2] : '';

// create a server object:
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(db);
      res.end(`${students.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.statusCode = 404;
  res.end();
}).listen(1245);

module.exports = app;
