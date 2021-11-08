module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      profile_id: DataTypes.INTEGER,
      photo_comments_path: DataTypes.STRING,
      photo_id: DataTypes.STRING,
    },
    {
      tableName: "comments",
    }
  );
  Comment.associate = (models) => {
    Comment.belongsToMany(models.Event, {
      through: "event_has_comments",
      as: "events",
      foreignKey: "comment_id",
      otherKey: "event_id",
    }),
      Comment.belongsToMany(models.Post, {
        through: "post_has_comments",
        as: "post",
        foreignKey: "comment_id",
        otherKey: "post_id",
      }),
      Comment.belongsToMany(models.Photo, {
        through: "photo_has_comments",
        as: "photo",
        foreignKey: "comment_id",
        otherKey: "photo_id",
      }),
      Comment.belongsToMany(models.Like, {
        through: "comment_has_likes",
        as: "like",
        foreignKey: "comment_id",
        otherKey: "like_id",
      });
  };

  return Comment;
};
