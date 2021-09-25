"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Neto Machado",
          phone: "19.994397474",
          email: "neto@email.com",
          creation_date: "",
          password:
            "$2a$10$kUNtnqT9ZaLt7r9WrvQO5ueU2pa/wJ5tOL7ccPijbY0ZHpIoQFdkS",
        },
        {
          name: "André Nunes",
          phone: "(11)9 9999-9999",
          email: "andre@email.com",
          creation_date: "",
          password:
            "$2a$10$FK88sOq7B3VJReTJnls6/.4hxnxPrN4X2SSGJuCsxHemR8O92yvhS",
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
