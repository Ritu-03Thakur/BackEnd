/******************  SYNCHRONOUS  FS  *************/

const fs = require("fs");

//   1. Create the file if the file is not exist
fs.writeFileSync("readWrite.txt", "Hello");

//    2. Add content into the file
//  fs.appendFileSync("readWrite.txt" , "   Homosapien");

//    3. Read the File
// const read =  fs.readFileSync("readWrite.txt" , "utf-8") ;
// console.log(read); // Hello    Homosapien

//    4. Delete the file
fs.unlinkSync("readWrite.txt");
