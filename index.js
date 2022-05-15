require("dotenv").config();

const server = require("./src/sever");
const dbConnect = require("./src/lib/db");

const PORT = process.env.PORT || 8080;

dbConnect()
  .then(() => {
    console.log("Database connected");
    server.listen(PORT, () => {
      console.log("Server running on port 5435 <3");
    });
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
