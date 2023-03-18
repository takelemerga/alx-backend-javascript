const fs = require('fs');

const path = './db.csv';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error(err));
        return;
      }
      const content = data.toString().split('\n');
      console.log(content);

      let students = content.filter((item) => item);
      console.log(students);

      students = students.map((item) => item.split(','));
      console.log(students);

      const fields = {};
      for (const i in students) {
        if (i !== 0) {
          if (!fields[students[i][3]]) fields[students[i][3]] = [];

          fields[students[i][3]].push(students[i][0]);
        }
      }
      console.log(fields);
      delete fields.field;
      console.log(fields);

      resolve(fields);

      //   return fields;
    });
  });
}
readDatabase(path);

//export default readDatabase;
