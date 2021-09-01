'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('kinds', { 
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false

      },
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
      

    });
    
  },

  down: async (queryInterface, Sequelize) => {
 
    await queryInterface.dropTable('kinds');
    
  }
};