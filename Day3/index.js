const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

app.get("/get", (req, res) => {


  fs.readFile("data.txt", { encoding: "utf-8" }, (err, data) => {

    
    res.status(200).json({
      todoList: JSON.parse(data),
    })

  })



})

app.post("/post", (req, res) => {
  let todo = req.body.task;

  let data = fs.readFileSync("data.txt", { encoding: "utf-8" }) || "[]";

  data = JSON.parse(data);
  data.push(todo);


  fs.writeFile("data.txt", JSON.stringify(data), (err) => {
    return res.status(201).send({
      todoTask: todo,
    })
  })
})


app.delete("/delete", async (req, res) => {
  let todoItem = req.body;

  let data = JSON.parse(fs.readFileSync("data.txt", { encoding: "utf-8" }));
  let newData = data.filter((value) => {
    return value != todoItem.task;
  })
  
  let updateData = fs.writeFileSync("data.txt", JSON.stringify(newData));
  res.send(newData);
})

app.listen(8000, () => {
  console.log("server listen on port 8000");
})