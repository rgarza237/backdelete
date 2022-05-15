const Organizer = require("../models/organizer");

 function createOrganizer(dataOrganizer) {
    const { name, lastName, email, password, city, country, telephone } =
      dataOrganizer;
    return Organizer.create({
      name,
      lastName,
      email,
      password,
      city,
      country,
      telephone,
    });
  }

  module.exports = {
      createOrganizer
  };