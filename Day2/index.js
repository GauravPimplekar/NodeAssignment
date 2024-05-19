const { error } = require("console");
const fs = require("fs");

const method = process.argv[2];
const fileName = process.argv[3];
const content = process?.argv[4];

if(method == "read"){
  const readFileFunction = async()=>{
    fs.readFile(fileName, {encoding: "utf-8"}, (err, data)=>{
      console.log(data);
    })
  }

  readFileFunction();
}
else if(method == "create"){
  const createFileFunction = async()=>{
    fs.writeFile(fileName, content, (err)=>{
      console.log("file writen successfully")
    })
  }

  createFileFunction();
}
else if(method == "delete"){
  fs.unlink(fileName, (err)=>{
    console.log("file deleted successfully");
  })
}
else if(method == "append"){
  fs.appendFile(fileName, content , (err)=>{
    console.log("data append successfully");
  })
}