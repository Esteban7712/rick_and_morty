const { Router } = require("express")

//Controllers
const getCharById = require("../controllers/getCharById.js");
const getCharDetail = require("../controllers/getCharDetail.js");
const postFavorites = require("../controllers/postFavorite.js")
const getFavorites = require("../controllers/getFavorites.js");
const deleteFavorite = require("../controllers/deleteFavorite.js");

const router = Router();

router.get("/onsearch/:", getCharById);
router.get("/detail/:id", getCharDetail);
router.post("/fav", postFavorites);
router.get("/fav", getFavorites);
router.delete("/fav/:id", deleteFavorite)

module.exports = {router}



