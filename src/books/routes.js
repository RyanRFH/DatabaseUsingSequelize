const {Router} = require("express");

const bookRouter = Router();

const {addBook, getAllBooks, deleteBook, getBookByTitle, updateBook, deleteAllBooks} = require("./controller");

bookRouter.post("/books/addBook", addBook);
bookRouter.get("/books/getAllBooks", getAllBooks);
bookRouter.get("/books/getBookByTitle/:title", getBookByTitle);
bookRouter.delete("/books/deleteBook", deleteBook);
bookRouter.delete("/books/deleteAllBooks", deleteAllBooks);
bookRouter.put("/books/updateBook", updateBook);



module.exports = bookRouter;