'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },
        nome:{
          type:Sequelize.STRING,
          allowNull:false
        },
        telefone:{
            type:Sequelize.STRING,
            allowNull:false
        },
        email:{
            type:Sequelize.STRING,
            allowNull:false
        },
        data_criacao:{
            type:Sequelize.DATE,
            allowNull: false
        },
        senha:{
          type:Sequelize.STRING,
          allowNull:false
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
 
    await queryInterface.dropTable('users');
    
  }
};
