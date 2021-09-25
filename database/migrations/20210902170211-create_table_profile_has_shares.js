"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("profile_has_shares", {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      profile_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: "profiles",
          key: "id",
        },
      },
      share_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: "shares",
          key: "id",
        },
      },

      created_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updated_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("profile_has_shares");
  },
};
