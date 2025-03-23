const BookModles = require("../models/BookModels")

exports.getAllBook = async(req, res, next) =>{
    try{
        const book = await BookModles.find()

        res.status(200).json(book)
    }
    catch(error){
        res.status(500).json({
            message:"Intenal Server Error"
        })
    }
}


exports.getBookById = async(req,res) =>{
    try{
        const book = await BookModles.findById(req.params.id)
        if(!book){
            return res.status(404).json({
                message:"Book not found"
            })
        }

        res.status(200).json(
            book
        )
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}
