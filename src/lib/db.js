const mongoose = require("mongoose");


const DB_USER = process.env.DB_USER || "";
const DB_HOST = process.env.DB_HOST || "";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_NAME = process.env.DB_NAME || "";

const URL = `mongodb+srv://Jameskodemia:Jameskodemia@jeffrybezoskodemia.uzveq.mongodb.net/dbenroute`;

function connect() {
    console.log(URL)
  return mongoose.connect(URL); // regresa una promesa
}


module.exports = connect;