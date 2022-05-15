const express = require("express");
const useCasesOrganizer = require("../controllers/organizers");

const router = express.Router();
router.post("/", async (request, response) => {
    try {
      const dataOrganizer = request.body;
      const newOrganizer = await useCasesOrganizer.createOrganizer(dataOrganizer);
  
      response.json({
        success: true,
        message: "Organizer created",
        data: {
          organizer: newOrganizer,
        },
      });
    } catch (error) {
      response.json({
        success: false,
        message: "Error to create new organizer",
        error: error.message,
      });
    }
  });

  module.exports = router;
