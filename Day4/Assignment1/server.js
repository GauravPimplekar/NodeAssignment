const express = require("express");

const app = express();
app.use(express.json());


const validateData = (req, res, next)=>{
  const data = req.body;

  if(!data?.id, !data?.name, !data?.rating, !data?.description, !data?.genre, !data?.cast){
    console.log(data);
    return res.send("all fields are mendatory");
  }

  if((typeof data.id) != "number" || (typeof data.rating) != "number" || (typeof data.description) != "string" || (typeof data.genre) != "string" || data?.cast.length == 0){
    
    return res.status(400).send("bad request");
  }

  next();
}

app.post("/movies", validateData, (req, res)=>{
  res.send("movie save in database");
})

app.listen(8000, ()=>{
  console.log("server is running on port 8000");
})