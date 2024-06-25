const fs = require("fs");//Import File system

//WRITE FILE 
fs.writeFile("message.txt","hello nodejs",(err) =>{

    if(err) throw err;
    console.log("the file has been saved");
})


//READ FILE
fs.readFile("message.txt",'utf8' ,(err,data)=>{
    if(err) throw err;
    console.log(data);
})

