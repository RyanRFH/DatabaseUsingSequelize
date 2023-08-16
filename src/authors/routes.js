const {Router} = require("express")

const authorRouter = Router()

const {addAuthor} = require("./controller")


authorRouter.post("/authors/addAuthor", addAuthor)

module.exports = authorRouter