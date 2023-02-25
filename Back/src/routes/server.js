//const http = require("http");
//const characters = require("../utils/data");
const {router} = require ("../routes/index")
const PORT = 3001
const express = require("express")
const server = express()
const cors = require("cors");

server.use(express.json())//middleware
server.use("/", router) //middleware
server.use(cors());

server.listen(PORT, () => {
  console.log(`Server raised in port ${PORT}`);
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
