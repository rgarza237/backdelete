const mongoose = require("mongoose");


const singerSchema = new mongoose.Schema({
    stageName: {
         type: String, 
         required: true 
        },
    name: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    nationality: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
  });

  const model = mongoose.model("singer", singerSchema);
module.exports = model;