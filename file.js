const fs = require('fs');

// sync..
// fs.writeFileSync("./test.txt","hey there")

//Async
// fs.writeFile("./test.txt","hello async",(err)=>{

// })
// fs.readFile("./text.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error",err);
//     }
//     else{
//         console.log("result");
//     }
// });

fs.appendFileSync("./test.txt",`${Date.now()} hey there\n`)