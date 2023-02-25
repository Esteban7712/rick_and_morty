const favorites = require("../utils/favorites.js");

const getFavorites = async (req, res) => {
    try {
       await res.status(200).json(favorites);
    }
    catch (error) {
    res.status(500).json({ message: error.message });
  }
    
}

module.exports = getFavorites;