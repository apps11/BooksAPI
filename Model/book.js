const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:String,
    city:String
})

module.exports = mongoose.model("Book",schema);