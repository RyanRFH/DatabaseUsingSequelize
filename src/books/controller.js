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

const getBookByTitle = async (req,res) => {
    try {
        const book = await Book.findOne({
            where : {
                title: req.params["title"]
            }
        })
        res.status(200).json({message: "Success", book: book})

    } catch (error) {
        console.log(error)
        res.status(501).json({errorMessage: error.message, error: error})
    }
}

const deleteBook = async (req, res) => {

    try {
        const deletedBook = await Book.destroy({
            where: req.body
        })

        res.status(200).json({message: "Success", bookDeleted: deletedBook})
    } catch (error) {
        res.status(501).json({message: error.message, error: error})
    }
}

const deleteAllBooks = async (req, res) => {

    try {
        const deletedBooks = await Book.destroy({truncate: true})

        res.status(200).json({message: "Success", booksDeleted: deletedBooks})
    } catch (error) {
        res.status(501).json({message: error.message, error: error})
    }
}

const updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.update({title : req.body.newBookTitle}, {
            where: {
                title: req.body.bookTitleToFind
            }
        });

        res.status(200).json({message: "Success", bookUpdated: updatedBook})

    } catch (error) {
        const errorResponse = {
            message: error.message,
            error: error
        }
        res.status(501).json(errorResponse);
    }
}

module.exports = {
    addBook,
    getAllBooks,
    deleteBook,
    getBookByTitle,
    updateBook,
    deleteAllBooks
};