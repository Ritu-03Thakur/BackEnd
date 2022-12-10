let express = require("express") ; 
let app = express() ; 
app.get('/get' , (req , res) =>{
res.send("<p> First Name : " + req.query['firstname'] + "</p>"
 +  "<p> Last Name : " + req.query['lastname'] + "</p>" + 
 "<p> Email :  " + req.query['email'] + "</p>" + 
 "<p> Your Message :  " + req.query['message'] + "</p>"  );

});
let server = app.listen(8000 , ()=>{
    let host = server.address().address ; 
    let port = server.address().port ; 
    console.log("App is listening at http://%s :%s" , host , port);
})