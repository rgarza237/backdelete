const express = require("express");
const server = express();
const cors = require("cors");

//middlewares
server.use(cors());
server.use(express.json());

//reqiore router
const organizersRouter = require("./routers/organizers");


//routers
server.use("/organizer", organizersRouter);

module.exports = server;