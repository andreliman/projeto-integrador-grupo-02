"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("events", {
      event_id: {
        type: Sequelize.CHAR(40),
        primaryKey: true,
        allowNull: false,
      },
      profile_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: "profiles",
          key: "id",
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      beginning_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      ends_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      hour: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      finish_hour: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      local: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      photo_event_path:Sequelize.STRING,
      photo_id:Sequelize.STRING,

      num_comments: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      num_likes: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      num_share: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable("events");
  },
};
