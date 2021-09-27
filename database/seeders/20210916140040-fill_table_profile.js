"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "profiles",
      [
        {
          user_id: 1,
          breed_id: 1,
          style: "travesso",
          pet_name: "Bono",
          birthday: "",
          genre: "macho",
          local: "Campinas",
          nickname: "Bono",
          bio: "muito ativo e travesso, adora correr",
          photo_id: "1",
          photo_profile_path: "/images/cachorro1.jpg",
          night_mode: 1
        },
        {
          user_id: 2,
          breed_id: 1,
          style: "Sussinha",
          pet_name: "Sabrino",
          birthday: "",
          genre: "macho",
          local: "São Paulo",
          nickname: "Bino",
          bio: "Sempre em busca da próxima aventura!",
          photo_id: "1",
          photo_profile_path: "/images/cachorro1.jpg",
          night_mode: 1,
        },
        {
          user_id: 2,
          breed_id: 2,
          style: "Nervouser",
          pet_name: "Polenta",
          birthday: "",
          genre: "fêmea",
          local: "Rio de Janeiro",
          nickname: "Polentinha",
          bio: "Se me atacar, eu vou atacar!",
          photo_id: "2",
          photo_profile_path: "/images/praia.png",
          night_mode: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("profiles", null, {});
  },
};
