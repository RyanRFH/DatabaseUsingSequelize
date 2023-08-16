const Genre = require("./model");
const Book = require("../books/model");
const Author = require("../authors/model");

const addGenre = async (req,res) => {
    try {
        const genre = await Genre.create({
            genreName: req.body.genreName
        })
        res.status(201).json({message: "Success", newGenre: genre})
    } catch (error){
        console.log(error)
        res.status(501).json({errorMessage: error.message, error: error})
    }

}

module.exports = {
    addGenre
}