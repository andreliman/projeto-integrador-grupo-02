'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('albuns', { 
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true, 
            autoIncrement:true
        },
        id_profile:{
          type:Sequelize.INTEGER,
          references: {
            model: 'profiles',
            key: 'id'
          }},

        descricao:{
            type:Sequelize.STRING,
            allowNull:false
        },
        qtd_fotos:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        data_criacao:{
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

