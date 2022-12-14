const  express = require('express');
const app = express(); 
let PORT  = 3000 ; 

//  Response Attachment Method 
app.get('/obj' ,(req , res) =>{
    res.attachment("../Get-Post-Request/index.html");
    console.log(res.get('Content-Disposition'));
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
attachment; filename="index.html"
 */