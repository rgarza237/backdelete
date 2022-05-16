const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser")
server.use(bodyParser.json({
    limit:'10mb'
}));
server.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true
}));

//middlewares
server.use(cors());
server.use(express.json());


//reqiore router
const userRouter = require("./routers/user");
const albumRouter = require("./routers/album");
const songRouter = require("./routers/song")
const allSongsRouter = require("./routers/allSongs")
//routers
server.use("/user", userRouter);
server.use("/album", albumRouter);
server.use("/album/:idAlbum/song", songRouter)
server.use("/songs", allSongsRouter)



module.exports = server;