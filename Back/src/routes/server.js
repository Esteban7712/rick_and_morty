//const http = require("http");
//const characters = require("../utils/data");
const {router} = require ("../routes/index")
const PORT = 3001
const express = require("express")
const server = express()
const cors = require("cors");
const saveApiData = require("../controllers/saveApiData")
const {sequelize} = require("../DB_connection")



server.use(cors());
server.use("/", router); //middleware
server.use(express.json())//middleware

server.get("/", (request, response) => {
  console.log(`URL: ${request.url}`);
  response.send("SERVER IS ALIVE");
});


/* server.listen(PORT, () => {
  console.log(`Server raised in port ${PORT}`);
}) */



/* server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); //res.header("Access-Control-Allow-Origin", "http://localhost:3000"); //Autorizo recibir solicitudes de este dominio
  res.setHeader("Access-Control-Allow-Credentials", true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin, Accept, Accept-Language, Content-Language, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  ); //Autorizo recibir solicitudes con dichos hedears
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  ); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
  next();
}); */



sequelize.sync({force: true}).then(async () => {
  await saveApiData();
  server.listen(PORT, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${PORT}`);
});
})

module.exports = {server}

/* http
  .createServer((req, res) => {
    console.log(`Server raised in port ${PORT}`);
    res.setHeader("Access-Control-Allow-Origin", "*");

    let id = req.url.split("/").at(-1);
    if (req.url.includes("onsearch")) {
      getCharById(res, id);
    }

    if (req.url.includes("detail")) {
      getCharDetail(res, id);
    } */

    //OTRA FORMA
    /* const allUrl = req.url.split("/");
    const id = Number(allUrl.pop());
    const url = allUrl.join("/");

    switch (url) {
      case "/onsearch":
        return getCharById(res, id);
      case "/detail":
        return getCharDetail(res, id);

      default:
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Character not found");
    } */
  /* })
  .listen(PORT, "localhost"); */
