const {Router} = require("express");

const genreRouter = Router();

const {addGenre} = require("./controller");

genreRouter.post("/genre/addGenre", addGenre);



module.exports = genreRouter;