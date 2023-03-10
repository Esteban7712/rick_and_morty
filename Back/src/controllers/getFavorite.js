const favorites = require("../utils/favorites.js");

const getFavorite = (req, res) => {
    try {
       res.status(200).json(favorites);
    }
    catch (error) {
    res.status(500).json({ message: error.message });
  }
    
}

module.exports = getFavorite;