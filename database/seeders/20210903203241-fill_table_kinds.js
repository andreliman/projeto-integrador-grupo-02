'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('kinds', [
      { kind: 'Ave' },
      { kind: 'Cão' },
      { kind: 'Gato' },
      { kind: 'Peixe' },
      { kind: 'Réptil' },
      { kind: 'Roedor' },
      { kind: 'Outro' },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('kinds', null, {});
  }
};