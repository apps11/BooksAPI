const express = require('express');
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const route = require('./route')

mongoose.connect('mongodb+srv://User:2ZSOtQST24RTD61T@cluster0.hlbvp.mongodb.net/db?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}).then(
   ()=>{
    const app = express();
    app.use(bodyparser.urlencoded({extended:true}));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use("/api",route);
    app.listen(process.env.PORT || 3000,()=>{
        console.log("server Started...");
    })
   }    
)

