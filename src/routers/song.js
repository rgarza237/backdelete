const Song = require("../models/song")
const express = require("express")
const router = express.Router({ mergeParams: true });
const useCasesSongs = require("../controllers/song")

router.get("/", async (request, response) => {
    try {
      const idAlbum = request.params.idAlbum;
      const allSongs = await useCasesSongs.getAllSongs(idAlbum);
  
      response.json({
        success: true,
        message: "All songs",
        data: {
          songs: allSongs,
        },
      });
    } catch (error) {
      response.status(400);
      response.json({
        success: false,
        message: "Songs not found",
      });
    }
  });
  router.get("/:idSong", async (request, response) => {
    try {
      const idSong = request.params.idSong;
      if (!idSong) throw new Error("Song not found");
  
      const songFound = await useCasesSongs.getSongById(idSong);
  
      response.json({
        success: true,
        message: "Song found",
        data: {
          song: songFound,
        },
      });
    } catch (error) {
      response.status(404);
      response.json({
        success: false,
        message: "Song not found",
      });
    }
  });
  
  router.post("/", async (request, response) => {
    try {
      const dataSong = request.body;
      const idAlbum = request.params.idAlbum;
  
      if (!idAlbum || !dataSong) {
        throw new Error("You need data");
      }
      const newSong = await useCasesSongs.createSong(
        dataSong,
        idAlbum
      );
  
      response.json({
        success: true,
        message: "Song created sucessfully",
        data: {
          song: newSong,
          album: idAlbum,
        },
      });
    } catch (error) {
      response.status(400);
      response.json({
        success: false,
        message: "Song not create",
      });
    }
  });

module.exports = router;