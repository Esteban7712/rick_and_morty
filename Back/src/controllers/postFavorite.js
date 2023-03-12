const {Favorite} = require("../DB_connection")

const postFavorite = async(req, res) => {
  try {
      const {id, name, status, species, gender, origin, image} = req.body;
      if (!id || !name || !status || !species || !gender || !origin || !image) {
          throw res.status(404).json({message: "Complete all Fields"})
      }
      const favorite = await Favorite.create({
          id,
          name,
          status,
          species,
          gender,
          origin,
          image
      })
      return res.status(200).json(favorite)
  } catch (error) {
      return res.status(404).json({message: error.message})
  }
}

module.exports = postFavorite;

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

