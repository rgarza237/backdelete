const express = require("express");
const useCasesUser = require("../controllers/user");
const router = express.Router();

router.post("/", async (request, response) => {
    try {
      const dataUser = request.body;
      const newUser = await useCasesUser.createUser(dataUser);
  
      response.json({
        success: true,
        message: "User created",
        data: {
          User: newUser,
        },
      });
    } catch (error) {
      response.json({
        success: false,
        message: "Error to create new User",
        error: error.message,
      });
    }
  });
 
  router.get("/", async (request, response) => {
    try {
      const allUsers = await useCasesUser.getAllUser();
  
      response.json({
        success: true,
        message: "All Users",
        data: {
          user: allUsers,
        },
      });
    } catch (error) {
      response.status(400);
      response.json({
        success: false,
        message: "Error at get all users",
        error: error.message,
      });
    }
  });

  router.get("/:id", async (request, response) => {
    try {
      const idUser = request.params.id;
      const userFound = await useCasesUser.getById(idUser);
  
      response.json({
        success: true,
        message: "User found",
        data: {
          user: userFound,
        },
      });
  
      if (!userFound) throw new Error("User not found");
    } catch (error) {
      response.status(404);
      response.json({
        success: false,
        message: "User not found",
        error: error.message,
      });
    }
  });

module.exports = router;