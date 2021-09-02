'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('profiles', { 
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'users',
          key: 'id'
      }},
      breed_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'breeds',
          key: 'id'
        }},
        pet_name:{
          type:Sequelize.STRING,
          allowNull:false
        },
        birthday:{
            type:Sequelize.DATE,
            allowNull:false
        },
        genre:{
          type:Sequelize.STRING,
          alowNull:false
        },
        location:{
            type:Sequelize.STRING,
            allowNull:false
        },
        nickname:{
            type:Sequelize.STRING,
            allowNull: false
        },
        bio:Sequelize.STRING,
        photo_profile:Sequelize.STRING,
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
 
    await queryInterface.dropTable('profiles');
    
  }
};