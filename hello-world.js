// console.log("HELLO WORLD")


// const fs = require('fs');

// fs.writeFile('welcome.txt', 'Hello Node',(err) => {
// if (err) throw err;
// console.log('File created successfully');
// });


const fs = require('fs');

// read file data
fs.readFile('hello.txt', 'utf8', (err, data) => {
if (err) {
    console.error(err);
    return;
}
  // log file data
console.log(data);
});

