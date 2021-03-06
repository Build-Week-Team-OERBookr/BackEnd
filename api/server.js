const express = require("express");
const cors = require('cors');
const helmet = require('helmet');

const apiRouter = require("./api-router");
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api", apiRouter);  


server.get('/', (req, res) => {
    res.status(200).json({message: 'Lets get Started!!'})
});
module.exports = server;