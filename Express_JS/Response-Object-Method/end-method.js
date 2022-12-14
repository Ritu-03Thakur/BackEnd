const  express = require('express');
const app = express(); 
let PORT  = 3000 ; 

//  Response End Method 
app.get('/obj' ,(req , res) =>{
    res.end()
});

app.listen(PORT , (err) =>{
    if(err){
        console.log(err);
    }
    console.log("Server listening on PORT " + PORT);
}) ; 

/*
Terminal -:
 Server listening on PORT 3000
 
 */