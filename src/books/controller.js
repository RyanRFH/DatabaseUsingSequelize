const Book = require("./model");

const addBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(200).json({message: "Success", bookAdded: newBook});
    } catch (error) {
        res.status(501).json({message: error.message, error: error});
        console.log(error);
    }
};

const getAllBooks = async (req, res) => {
    try  {
        const books = await Book.findAll()
        res.status(200).json({message: "Success", books: books})
    } catch (error) {
        res.status(501).json({message: error.message, error: error})
        console.log(error)
    }
}

const deleteBook = async (req, res) => {

    // {
    //     title: "Book2"
    // }

    try {
        const deletedBook = await Book.destroy({
            where: req.body
        })

        res.status(200).json({message: "Success", bookDeleted: deletedBook})
    } catch (error) {
        res.status(501).json({message: error.message, error: error})
    }
}

module.exports = {
    addBook,
    getAllBooks,
    deleteBook
};