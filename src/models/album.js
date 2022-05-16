const mongoose = require("mongoose");


const albumSchema = new mongoose.Schema({
    albumName: { 
        type: String, 
        required: true 
    },
    singer: { 
        type: String, 
        optional: true 
    },
    releaseDate: { 
        type: Date, 
        required: true, 
        default: new Date() 
    },
    songs: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "song"
    }],
    price: { 
        type: Number, 
        optional: true },
    stock: { 
        type: Number, 
        required: false,
         default: 100 },
    genre: { 
        type: String,
        required: true },
    image: { 
        type: String, 
        required: true },
  });

  const model = mongoose.model("album", albumSchema);
module.exports = model;
