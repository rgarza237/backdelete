
const mongoose = require("mongoose");
const album = require("./album")

const songSchema = new mongoose.Schema({
    name: {
     type: String, 
     required: true 
    },
    singer: { 
        type: String,
        optional: true 
    },
    album: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "album", 
    },
    duration: { 
        type: String, 
        required: true 
    },
    completeFile: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        optional: true 
    },
  });
const model = mongoose.model("song", songSchema);
module.exports = model;
