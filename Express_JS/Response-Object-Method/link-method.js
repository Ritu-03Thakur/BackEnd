const  express = require('express');
const app = express(); 
let PORT  = 3000 ; 

app.get('/obj' ,(req , res) =>{
 
  res.links({
    next : 'http://demo.com?page=2',
    middle : 'http://demo.com?page=4',
    last : 'http://demo.com?page=6'
  })
  console.log(res.get('link'));
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
 <http://demo.com?page=2>; rel="next", <http://demo.com?page=4>; rel="middle", <http://demo.com?page=6>; rel="last"

 */