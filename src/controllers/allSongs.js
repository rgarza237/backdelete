const AlbumSongs = require("../models/song")


function getEverySong() {
    return AlbumSongs.find({});
  }

module.exports = {
    getEverySong,
}