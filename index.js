

// function hello(){
//     console.log("hello world");
// }
// hello();

// const add=(a,b)=>{
//     return a+b;
// }
// const sum=add(2,7);
// console.log(sum);

// const add= require("./add");
// const sum=add(2,3);
// const sum2=add(7,6);
// console.log(sum)
// console.log(sum2)
// console.log("hello world")

// let http = require('http')
// let server = http.createServer((request,response)=>{
//     response.write("Hello World!!")
//     response.end();
// })
// server.listen(3000,()=>{
// console.log("server is running on port 3000")
// })
// console.log("start")
// setTimeout(()=>{
//     console.log("inside timer")
// },0)
// new Promise((resolve,reject)=>{
//     if(true){
//         resolve("resolved");
//     }
//     else{
//         reject("rejected")
//     }
// })
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)})
// console.log("end")

// const http=require('http')
// let port =8000;
// http.createServer((req,res)=>{
//     req.write("good morning");
//     req.write("hii");
//     res.end();
// })
// .listen(8000,()=>{
//     console.log('server is running on ${8000}')
// })

// const http = require('http')
// let port = 8000;
// http.createServer((req,res)=>{
//     res.write("Good morning");
//     res.write("hiii")
//     res.end();
// })
// .listen(port,()=>{
//     console.log(`server is running on ${port}`)
// })

// const http = require('node:http');

// // Create a local server to receive data from
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!',
//   }));
// });

// server.listen(8000);

// 1.Node.js uses which type of architecture?
// a) Multi-threaded
// b) Event-driven, non-blocking I/O
// c) Blocking I/O
// d) None of these

// 2.Which method is used to include modules in Node.js?
// a) import
// b) include
// c) require
// d) use

// 3.Which of the following is NOT an asynchronous function?
// a) fs.readFile()
// b) setTimeout()
// c) fs.readFileSync()
// d) Promise.resolve()

// 4.Which module is used to create a web server in Node.js?
// a) url
// b) http
// c) fs
// d) path

// 5.console.log("1");
// setTimeout(() => console.log("2"), 0);
// Promise.resolve().then(() => console.log("3"));
// console.log("4");
//  What will be the output order?

// 6.const fs = require("fs");
// fs.writeFile("test.txt", "Hello World", () => {
//   console.log("File Written");
// });
// console.log("Done");
// What will print first?

// 7.const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("Hello Client");
// });
// server.listen(3000, () => console.log("Server running"));
// What happens when you open http://localhost:3000 in the browser?

// 8.const path = require("path");
// console.log(path.basename("/user/docs/file.txt"));
// console.log(path.join("folder", "subfolder", "file.txt"));
//  What will this print?

// 9.const url = require("url");
// const myUrl = new URL("https://example.com:8080/home?name=Pooja");
// console.log(myUrl.hostname);
// console.log(myUrl.pathname);
// What will be the output?
// 10.Suppose your package.json file has:
// {
//   "name": "myapp",
//   "version": "1.0.0",
//   "scripts": {
//     "start": "node index.js"
//   }
// }
// What happens if you run npm start?
// 11.Which command is used to initialize a new Node.js project and create a package.json file?
// a) npm create
// b) npm init
// c) npm start
// d) npm new

// 12.Which command installs a package globally?
// a) npm install -g package-name
// b) npm install package-name --global
// c) Both a and b
// d) None of the above

// 13.Where does npm install external packages locally by default?
// a) /usr/local/lib/node_modules/
// b) node_modules/ folder inside the project
// c) package-lock.json
// d) package.json

// 14.What is the role of package-lock.json?
// a) Stores only global dependencies
// b) Locks exact versions of installed packages for consistency
// c) Stores system configuration
// d) Used only for devDependencies

// 15.Which file keeps metadata about a Node.js project and its dependencies?
// a) node_modules
// b) index.js
// c) package.json
// d) server.js
      
// const http = require('http');
// let port = 8080;
// http.createServer((req,res)=>{
//     req.write("good morning");
//     req.write("hi");
//     res.end();
// })
// .listen(port,()=>{
//     console.log(`runing the server ${port}`)
// })

// const express = require('express')
// const app = express();
// const router = express.Router();
// const port = 8080;

// router.use((req,res,next)=>{
// console.log("this is router middleware")
// next();
// })

// router.get('/',(req,res)=>{
// res.send("Home Page")
// })

// app.use('/',router)
// app.listen(port,()=>{
//     console.log(`server is running on ${port}`)
// })

// const http= require('http');
// let port=8080;
// http.createServer((req,res)=>{
//     console.log("Rohit singh")
//     res.write("hello");
//     res.write("hi");
//     res.end();
// })
// .listen(port,()=>{
//     console.log(`runnig the server ${port}`);
// });

// const http=require('http');
// let port =3000;
// http.createServer((req,res)=>{
//     console.log("rohit");
//       res.write("hello");
//       res.write("good morning");
//       res.end();
// })
// .listen(port,()=>{
//     console.log(`running the swerver ${port}`);
// });

// const http= require('http');
// let port=8080;
// http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end("home page")
//     }
//    else if(req.url==='/about'){
//         res.end("about page")
//     }
//     else{
//         res.end("404 page not found")
//     }
//     console.log("rohit");
   
// })
// .listen(port,()=>{
//     console.log(`running the server ${port}`)
// });
// console.log('hello')

const express = require('express');
const connected=require ("./config/db.js")
const User=require("./model/schema.js")
const app = express();
 
 connected();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/", function(req,res){
    res.send("hello rohit");
});
app.post("/users", async (req, res) => {
  try {
    const data=req.body;
    console.log(data);
    const user = await User.create(req.body);

    res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});
app.listen(3000,function(){
    console.log("its running");
})
