// Json.stringify --> object/array into Json
// Json.parse -->  Json into object/array 

const data = {
  name: "Ritu ",
  age: 1,
  title: "President ",
};
const conStr = JSON.stringify(data);
console.log(conStr);

/*
 {"name":"Ritu ","age":1,"title":"President "}
*/

const conObj = JSON.parse(conStr);
console.log(conObj);
/*
{ name: 'Ritu ', age: 1, title: 'President ' }
*/


// Json with file system 

const fs = require('fs');

const gaming = {
    Pubg : "C++" , 
    Minecraft : "Java" , 
    Ludo : "Python"
}
const jsonData = JSON.stringify(gaming) ; 
// fs.writeFile("eng.json" , jsonData ,(error) => {
//     console.log("Done") ; 
// })

fs.readFile("eng.json" , "utf-8",(err , data) =>{
    const orginal = JSON.parse(data);
    console.log( data);
    console.log( orginal);
})

/*
     {"Pubg":"C++","Minecraft":"Java","Ludo":"Python"}
     { Pubg: 'C++', Minecraft: 'Java', Ludo: 'Python' }
*/
