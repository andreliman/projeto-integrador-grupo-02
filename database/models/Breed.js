module.exports = (sequelize, DataTypes) => {
  const Breed = sequelize.define(
    "Breed",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      kind_id: DataTypes.INTEGER,
    },
    {
      tableName: "breeds",
    }
  );
  Breed.associate = (models) => {
    Breed.belongsTo(models.Kind, {
      foreignKey: "kind_id",
      as: "kind",
    });
    Breed.hasMany(models.Profile, {
      foreignKey: "breed_id",
      as: "profiles",
    });
  };

  return Breed;
};
