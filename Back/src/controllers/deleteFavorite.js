const favorites = require("../utils/favorites.js");

const deleteFavorite = async (req, res) => {
    const { id } = req.params
    try {
      if (id) {
        const filteredFavorites = favorites.filter((item) => item.id === id);
        if (filteredFavorites.length !== favorites.length) {
          favorites = filteredFavorites;
          await res.status(200).json({ success: true });
        }
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

module.exports = deleteFavorite 