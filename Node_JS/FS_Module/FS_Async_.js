/******************  ASYNCHRONOUS  FS  *************/

const fs = require("fs");

//   1. Create the file if the file is not exist
fs.writeFile("readWrite.txt", "Hello" , function(e)  {
    console.log("Done");
});
