const {Router} = require("express");

const genreRouter = Router();

const {addGenre, getGenreAndBooks} = require("./controller");

genreRouter.post("/genre/addGenre", addGenre);
genreRouter.get("/genre/getGenreAndBooks/:genre", getGenreAndBooks);


module.exports = genreRouter;