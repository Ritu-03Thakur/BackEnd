let express = require("express") ; 
let app = express() ; 

app.get('/' , (req ,res) =>{
  res.send("  Home Page  ");
});

app.get('/about' , (req ,res) =>{
  res.send("  About Page  ");
});

app.post('/contact' , (req ,res) =>{
  res.send("  Contact Page  ");
});
app.listen(3000 , ()=>{
    console.log("App is listening ...");
})