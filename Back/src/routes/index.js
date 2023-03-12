const { Router } = require("express")

//Controllers
const getCharById = require("../controllers/getCharById.js");
const getCharDetail = require("../controllers/getCharDetail.js");
const postFavorite = require("../controllers/postFavorite.js")
const getFavorite = require("../controllers/getFavorite.js");
const deleteFavorite = require("../controllers/deleteFavorite.js");
const getAllChars = require("../controllers/getAllChars.js")


const router = Router();

router.get("/rickandmorty/character/:id", getCharById);
router.get("/rickandmorty/detail/:id", getCharDetail);
router.get("/rickandmorty/fav", getFavorite);
router.get("/rickandmorty/allCharacters", getAllChars);
router.post("/rickandmorty/fav", postFavorite);
router.delete("/rickandmorty/fav/:id", deleteFavorite);


module.exports = {router}



