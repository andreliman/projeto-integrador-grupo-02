"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Neto Machado",
          phone: "(11)99439-7474",
          email: "neto@email.com",
          creation_date: "",
          password:
            "$2a$10$g0CwvLg.6VOCz24UX8GSdOJe66bBAWUdyi9phUBT/wmRbe3XoPORG",
        },
        {
          name: "André Nunes",
          phone: "(11)99999-9999",
          email: "andre@email.com",
          creation_date: "",
          password:
            "$2a$10$Dj2HshlXp59X5Us9IHRdxeYoYFRaduVVIFPnsxzZIHywtdpA/Trtq",
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};