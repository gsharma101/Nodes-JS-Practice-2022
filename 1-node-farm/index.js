const fs = require("fs");
/*
const hello = 'Hello World';
console.log(hello);
*/
const textIn = fs.readFileSync("txt/input.txt", "utf-8");
console.log(textIn);
const textOut = `This is what we know about the avocado: ${textIn}\n Created on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written');