require("dotenv").config();

const server = require("./src/sever");
const dbConnect = require("./src/lib/db");



dbConnect()
  .then(() => {
    console.log("Database connected");
    server.listen(8080, () => {
      console.log("Server running on port 8080 <3");
    });
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
