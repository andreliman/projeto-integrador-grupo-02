'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('profiles', [
      { user_id: 1,
      breed_id: 1,
      style: "travesso",
      pet_name: "Bono",
      birthday: "",
      genre: "macho",
      local: "Campinas",
      nickname: "Bono",
      bio: "muito ativo e travesso, adora correr",
      photo_id: "",
      photo_profile_path:""}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('profiles', null, {});
  }
};
