 var os = require('os') ; 

 console.log("\t HostName : " +os.hostname());
 console.log("\t Home Directory : " +os.homedir());
 console.log("\t Platform : " + os.platform());
 console.log("\t Architecture (or Bits) : " + os.arch());
 console.log("\t Temp Directory : " +os.tmpdir());
 console.log("\t Operating System Name : " +os.type()); 

 const freeMemory = os.freemem();
 console.log(`\nAvailable Memory = ${freeMemory/1024/1024/1024}`);

 const TotalMemory = os.totalmem();
 console.log(`\nTotal Memory = ${TotalMemory/1024/1024/1024}`);
 /* 
         HostName : LAPTOP-K7GQ2372
         Home Directory : C:\Users\HP
         Platform : win32
         Architecture (or Bits) : x64
         Temp Directory : C:\Users\HP\AppData\Local\Temp
         Operating System Name : Windows_NT 
            
         Available Memory = 2.5385475158691406

        Total Memory = 7.746696472167969                          
*/ 