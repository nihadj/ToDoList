//jshint esversion:6

const express = require("express");
bodyParser = require("body-parser");
const app = express();
date=require(__dirname+'/date.js')
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
items=[];
workItems=[];
app.get("/", function(req, res){
  day=date.getDate();
  res.render("list",{listTitle:day,newListItems:items})
  
});
app.post("/",function(req,res){
  item=req.body.newItem;
  if(req.body.list=="Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
})
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
