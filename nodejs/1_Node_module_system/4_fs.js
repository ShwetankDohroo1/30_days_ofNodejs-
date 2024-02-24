const fs = require('fs')

//read file

let Filecontent = fs.readFileSync('1_Node_module_system/main/f1.txt');
console.log('Content of file:- '+Filecontent);

//wrinting file

fs.writeFileSync('f2.txt','i wrote in file 2');


//append file

fs.appendFileSync('f3.txt','i appended in file 3');

//delete file

fs.unlinkSync('1_Node_module_system/main/f3.txt');

//create a directory

fs.mkdirSync('myDirectory')

//check the contents inside a directory

let folderpath = 'myDirectory'
let foldercontent = fs.readdirSync(folderpath)
console.log("foldercontent:- ", foldercontent)

//check if exists

let alive = fs.existsSync('myDirectory')
console.log(alive)

//delete a directory

fs.rmdirSync('myDirectory')