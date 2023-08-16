const {Router} = require("express")

const authorRouter = Router()

const {addAuthor, getAuthorAndBooks} = require("./controller")


authorRouter.post("/authors/addAuthor", addAuthor)
authorRouter.get("/authors/getAuthorAndBooks/:author", getAuthorAndBooks)

module.exports = authorRouter