const p = require("path");
console.log(
  "\t Base Name -:  " + p.basename("C:/BackEnd/Node_JS/Path_Module/path.js")
);
console.log(
  "\t Directory Name -:  " + p.dirname("C:/BackEnd/Node_JS/Path_Module/path.js")
);
console.log(
  "\t Exit Name -:  " + p.extname("C:/BackEnd/Node_JS/Path_Module/path.js")
);

const meme = p.parse("C:/BackEnd/Node_JS/Path_Module/path.js");
console.log("\t File Name  -:  " + meme.name);

/*  
         Base Name -:  path.js
         Directory Name -:  C:/BackEnd/Node_JS/Path_Module
         Exit Name -:  .js
         File Name  -:  path
*/
