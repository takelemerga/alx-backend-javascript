const fs = require('fs');

function lineCount(text) {
  let lines = 0;
  for (let i = 0, n = text.length; i < n; i += 1) {
    if (text[i] === '\n') {
      lines += 1;
    }
  }
  return lines;
}

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = lineCount(data) - 1;
    const words = data.trim().split('\n');
    words.shift();
    let csstudents = '';
    let sestudents = '';
    words.forEach((element) => {
      const as = element.trim().split(',');
      if (as[as.length - 1] === 'CS') {
        csstudents = `${csstudents + as[0]}, `;
      } else {
        sestudents = `${sestudents + as[0]}, `;
      }
    });

    const cs = csstudents.trim().slice(0, -1);
    const se = sestudents.trim().slice(0, -1);
    const numbcs = cs.split(',').length;
    const numbse = se.split(',').length;
    console.log(`Number of students: ${lines}`);
    console.log(`Number of students in CS: ${numbcs}. List: ${cs}`);
    console.log(`Number of students in SWE: ${numbse}. List: ${se}`);
  } catch (err) {
    console.log('Error: Cannot load the database');
  }
};

module.exports = countStudents;
