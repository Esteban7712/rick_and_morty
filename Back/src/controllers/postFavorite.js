const favorites = require("../utils/favorites.js")

const postFavorites = async (req, res) => {
    const { character } = req.body
    try{
        if (character) {
            favorites.push(character)
        }
    await res.status(200).send("Character Added to a Favorites List")//envia un texto plano
    }
    catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = postFavorites;