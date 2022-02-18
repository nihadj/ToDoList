var express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB",{userNewUrlParser:true});

const fruitSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Fuck Off"]
    },
    rating:{
        min:1,
        max:10
    },
    review:String
});

const Fruit=mongoose.model("Fruit",fruitSchema);

const fruit=new Fruit({
    name:"Apple",
    rating:9,
    review:"Good fruit"
})

fruit.save();

Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }else{
        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        })
    }
})

app.listen(3000,function(){
    console.log("Yes.");
})
