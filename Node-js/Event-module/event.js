const EventEmitter = require("events") ; 
const event = new EventEmitter() ; 

event.on("checkPage" , (sc, msg) =>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})

event.on("checkPage" , () =>{
    console.log("Please turn off  !!");
    setTimeout(() =>{
        console.log("---  OFF  ---")
    } , 3000) ; 
})

console.log("Before Calling ....") ; 
event.emit("checkPage" , 200 , "ok") ; 
console.log("After Calling ....") ; 

/*
Before Calling ....
status code is 200 and the page is ok
Please turn off  !!
After Calling ....
---  OFF  ---
*/ 