module.exports = (sequelize, DataTypes) => {
  const Kind = sequelize.define(
    "Kind",
    {
      kind: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "kinds",
    }
  );

  Kind.associate = (models) => {
    Kind.hasMany(models.Breed, {
      foreignKey: "kind_id",
      as: "breed",
    });
  };

  return Kind;
};
