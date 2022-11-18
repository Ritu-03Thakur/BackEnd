//Steps :- 
//  1. Export the function/variable 
//  2. Require the file 
//  3. Use  

//****************************************************************************** */


// const d = require("./Abt") ; // Importing 1 variable / function 
// console.log(d("Ritu")); //  Good Morning Ritu 


const {greet , name}  = require("./Abt") ; // Importing more than 1 variable / function 
console.log(greet("Ritu")); //  Good Morning Ritu 
console.log(name); //   Ritu Thakur 
