"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("profile_has_events", {
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
      event_id: {
        type: Sequelize.CHAR(60),
        references: {
          model: "events",
          key: "event_id",
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
    await queryInterface.dropTable("profile_has_events");
  },
};
