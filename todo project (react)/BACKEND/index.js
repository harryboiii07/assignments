const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/todo",function(req,res){

});

app.get("/todo",function(req,res){
  
});

app.put("/completed",function(req,res){

});

app.listen(port,()=>{
  console.log(`app listening on port ${port}`)
});