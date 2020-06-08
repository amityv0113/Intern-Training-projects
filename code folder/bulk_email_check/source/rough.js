fs = require('fs')
path = require('path')
console.log(__filename)
const filename = path.join(__dirname,'/text.txt')
console.log(filename)
fs.readFile(filename, 'utf8', (err,data) =>{
  if (err) {
    return console.log(err);
  }
  console.log(typeof data);
  arr = data.split('\n')
  console.log(arr)
  
});