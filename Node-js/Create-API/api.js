const ht = require('http') ; 
const fs = require('fs') ; 

// console.log(__dirname);
const server = ht.createServer((req , res) =>{
    const data = fs.readFileSync(`${__dirname}/User/Samle.json` , "utf-8");
    const obj = JSON.parse(data);
    if(req.url === "/"){
        res.end( "<h1> Home  :) </h1>");
    }
   else if(req.url === "/About"){
        res.end("<h1> Home  :) </h1>");
    }
   else if(req.url === "/data"){
        res.end(obj);
    }
    else {
        res.end("<h1> Error :404   :) </h1>");
    }
    
}).listen(8000 , "127.0.0.1" , () => {
    console.log("Working ....") ; 
}) ; 