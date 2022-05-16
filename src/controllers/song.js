const AlbumSongs = require("../models/song")




function getAllSongs(idAlbum) {
    return AlbumSongs.find({ album: { _id: idAlbum } }).populate("album", {
      albumName: 1,
    });
  }
  function getSongById(idSong) {
    return AlbumSongs.findById(idSong);
  }
  function createSong(songData, idAlbum) {
    const { name, singer,duration, completeFile, price } = songData;
    return AlbumSongs.create({
      name,
      singer,
      duration,
      completeFile,
      price,
      album: idAlbum,
    });
  }
  function updateById(idSong, dataUpdate) {
    return AlbumSongs.findByIdAndUpdate(idSong, dataUpdate, { new: true });
  }
  function deleteById(idSong) {
    return AlbumSongs.findByIdAndDelete(idSong);
  }


  module.exports = {
    getAllSongs,
    getSongById,
    createSong,
    updateById,
    deleteById,
  };