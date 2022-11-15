// Routing without framework 

const ht = require('http') ; 
 
const server = ht.createServer((req , res) =>{
    if(req.url === '/Home'){
        res.end("<h1>Home page :)</h1>"); 
    }
    
    if(req.url === '/Contact'){
        res.write("<h1>Contact page :)</h1>");// Write a response 
        res.end(); // End the response 
    }
    

    else if(req.url === '/About'){
        res.end("<h1>About page :)</h1>"); 
    }
    
   else{
     res.writeHead(404 , {'Content-type' : text})
       res.end("<h1>Error :  404  !!</h1>"); 
   }
})

server.listen(8000 , "127.0.0.1" , () => {
    console.log("Starting  Server ......");
})