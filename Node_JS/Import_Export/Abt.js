
const name = "Ritu Thakur" ; 

const greet = (a) => {
    return ` Good Morning  ${a}`  ; 
}
//    module.exports = name ;  //  Export 1 variable/function  
//    module.exports = greet ;  // Export 1 variable/function 

module.exports = {greet , name} ; //  Export more than 1 variable/function  