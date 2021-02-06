const express = require('express');
const Book = require('./Model/book');
const router = express.Router();


router.get("/books",async (req,res)=>{
    const book = await Book.find();
    res.send(book);
});

router.post("/books",async (req,res)=>{
    
    const book = new Book({
         name:req.body.name,
         qty:req.body.qty
    });
    await book.save();
    res.send(book);
});

router.put("/books/:id",async (req,res)=>{
    var id = req.params.id;
    await Book.findOneAndUpdate({_id:id},{$set:{name:req.body.name,qty:req.body.qty}});
    res.send("Updated....");

})

router.delete("/books/:id",async (req,res)=>{
    var id = req.params.id;
    await Book.findByIdAndDelete({_id:id})
    res.send("Data Deleted....")
})

module.exports = router;