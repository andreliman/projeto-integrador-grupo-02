"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "profiles",
      [
        {
          user_id: 1,
          kind_id: 2,
          breed_id: 70,
          pet_name: "Bono",
          birthday: "2020-05-14",
          genre: "Macho",
          local: "Campinas",
          nickname: "Bono",
          bio: "muito ativo e travesso, adora correr",
          photo_id: "1",
          photo_profile_path: "/images/cachorro1.jpg",
          night_mode: 1
        },
        {
          user_id: 2,
          kind_id: 2,
          breed_id: 26,
          pet_name: "Sabrino",
          birthday: "2020-05-14",
          genre: "Macho",
          local: "São Paulo",
          nickname: "Bino",
          bio: "Sempre em busca da próxima aventura!",
          photo_id: "1",
          photo_profile_path: "/images/cachorro1.jpg",
          night_mode: 1,
        },
        {
          user_id: 2,
          kind_id: 2,
          breed_id: 49,
          pet_name: "Polenta",
          birthday: "2020-05-14",
          genre: "Fêmea",
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