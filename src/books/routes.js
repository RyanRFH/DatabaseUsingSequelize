const {Router} = require("express");

const bookRouter = Router();

const {addBook, getAllBooks, deleteBook} = require("./controller");

bookRouter.post("/books/addBook", addBook);
bookRouter.get("/books/getAllBooks", getAllBooks);
bookRouter.delete("/books/deleteBook", deleteBook);

module.exports = bookRouter;