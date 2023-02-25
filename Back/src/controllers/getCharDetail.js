const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/"

//EXPRESS
const getCharDetail = async function (req, res) {
  const { id } = req.params;
  try {
    const {data} = await
    axios(`${URL}${id}`)
      
        const character = {
          image: data.image,
          name: data.name,
          gender: data.gender,
          status: data.status,
          origin: data.origin,
          species: data.species,
          location: data.location,
          id: data.id,
        };
        res.status(200).json(character);
      
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//NODE
/* const getCharDetail = function (res, id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((result) => result.data)
    .then((data) => {
      const character = {
        image: data.image,
        name: data.name,
        gender: data.gender,
        status: data.status,
        origin: data.origin,
        species: data.species,
        location: data.location,
        id: data.id,
      };
      res.writeHead(200, { "Content-Type": "application/json" })
      .end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" })
      .end("Character not found");
    });
}; */

module.exports = getCharDetail;

