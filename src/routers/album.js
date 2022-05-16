const express = require("express");
const useCasesAlbum = require("../controllers/album");

const router = express.Router();
router.post("/", async (request, response) => {
    try {
      const dataAlbum = request.body;
      const newAlbum = await useCasesAlbum.createAlbum(dataAlbum);
  
      response.json({
        success: true,
        message: "Album created",
        data: {
          Album: newAlbum,
        },
      });
    } catch (error) {
      response.json({
        success: false,
        message: "Error to create new Album",
        error: error.message,
      });
    }
  });

  router.get("/", async (request, response) => {
    try {
      const allAlbums = await useCasesAlbum.getAllAlbums();
  
      response.json({
        success: true,
        message: "All Albums",
        data: {
          album: allAlbums,
        },
      });
    } catch (error) {
      response.status(400);
      response.json({
        success: false,
        message: "Error at get all albums",
        error: error.message,
      });
    }
  });

  router.get("/:id", async (request, response) => {
    try {
      const idAlbum = request.params.id;
      const albumFound = await useCasesAlbum.getById(idAlbum);
  
      response.json({
        success: true,
        message: "Album found",
        data: {
          album: albumFound,
        },
      });
  
      if (!albumFound) throw new Error("Album not found");
    } catch (error) {
      response.status(404);
      response.json({
        success: false,
        message: "Album not found",
        error: error.message,
      });
    }
  });

      module.exports = router;