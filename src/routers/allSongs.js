const Song = require("../models/song")
const express = require("express")
const useCasesSong = require("../controllers/allSongs");
const router = express.Router();


router.get("/", async (request, response) => {
    try {
      const allSongs = await useCasesSong.getEverySong();
  
      response.json({
        success: true,
        message: "All Songs",
        data: {
          song: allSongs,
        },
      });
    } catch (error) {
      response.status(400);
      response.json({
        success: false,
        message: "Error at get all songs",
        error: error.message,
      });
    }
  });

  

module.exports = router;