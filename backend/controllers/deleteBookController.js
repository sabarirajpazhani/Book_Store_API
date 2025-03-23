const BookModles = require("../models/BookModels")

exports.deleteBook =async(req,res)=>{
    try{
        const deleteBook = await BookModles.findByIdAndDelete(req.params.id)

        if(!deleteBook){
            res.status(404).json({
                message:"Book not Found"
            })
        }

        res.status(200).json({
            message: "Book was deleted Successfully"
        })
    }
    catch(error){
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}