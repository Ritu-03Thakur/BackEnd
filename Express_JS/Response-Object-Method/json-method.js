const  express = require('express');
const app = express(); 
let PORT  = 3000 ; 

app.get('/obj' ,(req , res) =>{
 
   res.json({
    name : "Ritu" ,
    age : 1 , 

   })
});

app.listen(PORT , (err) =>{
    if(err){
        console.log(err);
    }
    console.log("Server listening on PORT " + PORT);
})
/*
Terminal -:
 Server listening on PORT 3000
Browser -:
{"name":"Ritu","age":1}
 */