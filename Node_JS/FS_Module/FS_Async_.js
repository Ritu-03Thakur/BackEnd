/******************  ASYNCHRONOUS  FS  *************/

const fs = require("fs");

//   1. Create the file if the file is not exist
/*  fs.writeFile("readWrite.txt", "Hello" , function(e)  {
    console.log("Done");                      
});                                    */


// 2. Add content into the file
/*  
 fs.appendFile("readWrite.txt" ,   "\nHomosapien " , function(e){
     console.log("Adding  word in readWrite.txt ");
   });
   
  fs.appendFile("top.html" ,   "\n<p> homo </p> " , function(e){
    console.log("Adding  Tag in top.html ");
  });
*/


// 3. Read the File
fs.readFile("top.html", "utf-8", (e, data) => {
  console.log(data);
});
console.log("After data"); 



//    4. Delete the file
 fs.unlink("readWrite.txt" , function(e){
    console.log("Deleting ......");
 });
