'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('posts', { 
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      profile_id:{
        type:Sequelize.INTEGER,
        references: {
          model: 'profiles',
          key: 'id'
        }},
      post:{
        type:DataTypes.STRING,
        allowNull:false
        },
        
      likes:DataTypes.INTEGER,
      num_comments:DataTypes.INTEGER,
      share:DataTypes.INTEGER,
      
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }})
    
  },

  down: async (queryInterface, Sequelize) => {
 
    await queryInterface.dropTable('posts');
    
  }
};
