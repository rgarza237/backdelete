const User = require("../models/user");

 function createUser(dataUser) {
    const { name, email, password } =
      dataUser;
    return User.create({
      name,
      email,
      password
    });
  }

 
  function getAllUser() {
    return User.find({});
  }
  
  function getById(idUser) {
    return User.findById(idUser);
  }

  function patchById(idUser, dataToUpdate) {
    return User.findByIdAndUpdate(idUser, dataToUpdate, { new: true });
  }
  function deleteById(idUser) {
    return User.findByIdAndDelete(idUser);
  }

  module.exports = {
      createUser,
      getAllUser,
      getById,
      patchById,
      deleteById,
  };