const BookModles = require("../models/BookModels")

exports.addBook = async(req, res)=>{
    const{bookTitle,author,price, publishYear } = req.body 

    try{
        const duplicateBook = await BookModles.findOne({bookTitle,author})

        if(duplicateBook){
            return res.status(400).json({
                message:"Book with this title and author is already "
            })
        }

        const newBook = new BookModles({bookTitle,author,price, publishYear})
        await newBook.save()

        res.status(200).json({
            message:"Book is Sucessfully added "
        })
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}