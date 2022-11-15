const ht = require('http') ; 

const serve = ht.createServer((request , response) =>{
 //   response.end("Hello Page") ; 
    response.end("<h1>Hello</h1>") ; 
})
serve.listen(3000 ,"127.0.0.1" ,() =>{
    console.log("Check in Browser");
}) ; 
console.log("exit");