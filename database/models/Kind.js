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
    Kind.hasMany(models.Profile, {
      foreignKey: "kind_id",
      as: "profiles_kind",
    });
  };

  return Kind;
};
