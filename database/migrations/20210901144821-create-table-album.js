'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('albuns', { 
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true, 
            autoIncrement:true
        },
        profile_id:{
          type:Sequelize.INTEGER,
          references: {
            model: 'profiles',
            key: 'id'
          }},

        description:{
            type:Sequelize.STRING,
            allowNull:false
        },
        num_photos:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        creation_date:{
            type:Sequelize.DATE,
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
 
    await queryInterface.dropTable('albuns');
    
  }
};

