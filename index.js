const express = require("express");
const mongoose = require("mongoose");
const route = require('./route');
const bodyparser = require('body-parser');

mongoose.connect("mongodb://localhost:27017/db",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        const app = express();
        app.use(bodyparser.urlencoded({extended:true}));
        app.use(express.json());
        app.use("/api",route);
        app.listen(process.env.PORT || 1111,()=>{
            console.log("server started....");
        });
    }
);

//mongodb+srv://Apps:Anivlak<11@cluster0.hlbvp.mongodb.net/db?retryWrites=true&w=majority

//apps