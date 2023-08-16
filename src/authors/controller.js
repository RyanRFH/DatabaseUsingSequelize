const Author = require("./model");
const Book = require("../books/model");

const addAuthor = async (req,res) => {
    try {
        const author = await Author.create({
            authorName: req.body.authorName
        })
        res.status(201).json({message: "Success", newAuthor: author})
    } catch (error){
        console.log(error)
        res.status(501).json({errorMessage: error.message, error: error})
    }

}


// const getAuthorAndBooks = async (req,res) => {
//     try {
//         Author.get
//     } catch {

//     }
// }

module.exports = {
    addAuthor
}