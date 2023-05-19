const {Favorite} = require("../DB_connection")

const postCharacter = async(req, res) => {
  try {
      const {id, name, status, species, gender, origin, image} = req.body;
      if (!id || !name || !status || !species || !gender || !origin || !image) {
          alert("Complete all Fields");
          return res.status(404).json({message: "Complete all Fields"})
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
      return res.status(201).json(favorite)
  } catch (error) {
      return res.status(404).json({message: error.message})
  }
}

module.exports = postCharacter;



