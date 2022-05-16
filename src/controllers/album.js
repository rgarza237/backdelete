const res = require("express/lib/response");
const { default: mongoose } = require("mongoose");
const Album = require("../models/album");

function getAllAlbums() {
  return Album.find({});
}

function getById(idAlbum) {
    return Album.findById(idAlbum);
}

function createAlbum(dataAlbum) {
    return Album.create({
     ...dataAlbum,
    });
  };

/*function getById(idAlbum){
    return Album.findById(idAlbum).populate("song", {
        name: 1,
        singer: 1,
        completeFile: 1,
        price:1,
      });
};*/

/*async function getAllAlbums() {
  try{ 
   let data = await Album.findOne({}).populate("song", {
      name: 1,
      singer: 1,
      completeFile: 1,
      price:1,
    });
 
  res.status(200).json({data:[...data], success:true})
 }catch(err){
   console.log(err);
   res.status(500).json({success:false, msg:err.message})
 }
};*/

module.exports = {
  getAllAlbums,
  getById,
  createAlbum,
};