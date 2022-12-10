
let express = require('express'); 
let app = express(); 
app.get('/' , function (req , res){
    res.send("Hello  !!") ; // It take object as an Input and sends this to client 
});
 let server = app.listen(3000 , () =>{
    let host = server.address().address ; 
    let port = server.address().port ; 
    console.log("App Listening at http://%s : %s" , host , port );
});
/* 
In Terminal -:  App Listening at http://:: : 3000
In http://localhost:3000/  -:  Hello  !!
*/
