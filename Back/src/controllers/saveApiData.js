const axios = require("axios")
const { Character } = require('../DB_connection');

const URL = "https://rickandmortyapi.com/api/character?page="

const getApiData = async () => {
    try {
        let allCharactersInfoApi = [];
    for (let i = 1; i < 6; i++) {//BUSCA PAGINA POR PAGINA PARA TRAER LOS 100 PERSONAJES
            const apiData = await axios(`https://rickandmortyapi.com/api/character?page=${i}`)
            allCharactersInfoApi.push(apiData);
        }
        //console.log("Esta es la info", allCharactersInfoApi[0].data.results)
        allCharactersInfoApi = await Promise.all(allCharactersInfoApi);
        let allCharactersInfoApi2 = allCharactersInfoApi.map(response => response.data.results.map(charact => {
            return {
                id: charact.id,
                name: charact.name,
                species: charact.species,
                status: charact.status,
                origin: charact.origin.name,
                gender: charact.gender,
                image: charact.image
            }
        }))
        //console.log("esta es la nueva info", allCharactersInfoApi2)
        let allCharacters = allCharactersInfoApi2.flat()//flat saca arreglos dentro de arreglos
        //console.log("Esta es la nueva respuesta", allCharacters)
        return allCharacters//allCharactersInfoApi
    } catch (error) {
        return {error: error.message}
    }
}

const saveApiData = async () => {
    try {
        const dataToSync = await getApiData();
        await Character.bulkCreate(dataToSync)
    } catch (error) {
        return {error: error.message}
    }
}

//LLAMADO CON RECURSIVIDAD
/* const getApiData = async (URL, n = 101) =>{
    try {
        const {data} = await axios.get(`${URL}`);
        const {info, results} = data;
        const res = getRequestedData(results)

        if(n <= 1) return res;

        return res.concat(await getApiData(info.next, n-1));
    } catch (error) {
        alert(error,message)
    }
} */



module.exports = saveApiData;