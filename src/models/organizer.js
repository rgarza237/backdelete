
const mongoose = require("mongoose");

const organizerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    minlength: 3,
    maxlength: 50,
    trim: true,
  },
  lastName: {
    type: String,
    required: false,
    minlength: 2,
    maxlength: 50,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    match: /.+@.+\..+/,
  },
  password: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: false,
    minlength: 3,
    maxlength: 20,
    trim: true,
  },

  country: {
    type: String,
    required: false,
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  telephone: {
    type: Number,
    required: false,
    minlength: 2,
    maxlength: 20,
    trim: true,
  },
});

const model = mongoose.model("organizer", organizerSchema);
module.exports = model;
