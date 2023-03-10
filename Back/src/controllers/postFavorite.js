const favorites = require("../utils/favorites.js")

const postFavorite = (req, res) => {
    const { id, image, name, gender, species } = req.body;
    try{
        if (id && image && name && gender && species) {
          const check = favorites.filter((item) => item.id === Number(id));
          if (check.length > 0) {
            return res.status(400).send("This id dont exists");
          }
          let character = {
            id: id,
            image: image,
            name: name,
            gender: gender,
            species: species,
          };
          favorites.push(character);
          res.status(200).json(favorites);
        }
    }
    catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/* const postFavorites = async (req, res) => {
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
} */

module.exports = postFavorite;