const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {

    //   Ways to Read File :-
    //  1. Using FS

    // fs.readFile("data.txt", "utf-8", (err, data) => {
    //   if (err) return console.log(err);
    //   res.end(data.toString());
    // });

    // 2. Reading From a Stream
    // const rstream = fs.createReadStream("data.txt" );
    // rstream.on("data", (chunkdata) => {
    //   res.write(chunkdata);
    // });

    // rstream.on("end", () => {
    //   rstream.end();
    // });

    // rstream.on("error", (err) => {
    //   console.log(err);
    //   res.end("File Not Found !!");
    // });

    // 3. Stream Pipe
    const rstream = fs.createReadStream("data.txt" , "utf-8") ; 
    rstream.pipe(res);
  });


 server.listen(3000, "127.0.0.1");
