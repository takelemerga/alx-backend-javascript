const fs = require('fs/promises');

async function countStudents(path){

try {
  const data = await fs.readFile(path, { encoding: 'utf8' });
  lines = lineCount(data) - 1
  const words = data.trim().split('\n');
  words.shift();
  var csstudents = "";
  var sestudents = "";
  words.forEach(element =>{
     as = element.trim().split(',');
     if (as[as.length - 1] == 'CS'){
        csstudents = csstudents + as[0] + ', ';
      }
     else{
       sestudents = sestudents + as[0] + ', ';
     }
 });
     
  const cs = csstudents.trim().slice(0, -1);
  const se = sestudents.trim().slice(0, -1)
  const numbcs = cs.split(',').length;
  const numbse = se.split(',').length;
  console.log(`Number of students: ${lines}`);
  console.log(`Number of students in CS: ${numbcs}. List: ${cs}`);
  console.log(`Number of students in SWE: ${numbse}. List: ${se}`);
} catch (err) {
  console.log('Cannot load the database');
}

}

function lineCount(text) {
    lines = 0;
    for( let i = 0, n = text.length;  i < n;  ++i ) {
        if( text[i] === '\n' ) {
            ++lines;
        }
    }
    return lines;
}

module.exports = countStudents;
