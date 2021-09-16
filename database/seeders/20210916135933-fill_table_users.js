'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [ {
    name: "Neto Machado",
    phone: "19.994397474",
    email: "neto@email.com",
    creation_date: "",
    password: "123"} ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};