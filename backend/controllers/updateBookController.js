const BookModles = require("../models/BookModels")

exports.updateBooks = async(req,res)=>{
    try{
        const updateBook = await BookModles.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        })

        if(!updateBook){
            return res.status(404).json({
                message: "Book Not Found for Update"
            })
        }

        res.status(200).json({
            message: "Book was Updated successfully"
        })

    }

    catch(error){
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}