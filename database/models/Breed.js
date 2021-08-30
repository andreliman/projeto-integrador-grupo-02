
module.exports = (sequelize, DataTypes)=>{
    const Breed = sequelize.define('Breed',{
        id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true,},
        nome:DataTypes.STRING,
        kind_id:DataTypes.INTEGER,
        created_at:DataTypes.TIMESTAMPS,
        updated_at:DataTypes.TIMESTAMPS
    }, {
        tableName:'breed', 
        timestamps:false
    })
    Breed.associate = (models)=>{
        Breed.belongsTo(models.Kind,{
            foreignKey:'kind_id',
            as:'kind'
        })
    }
    Breed.associate = (models)=>{
        Breed.hasOne(models.Profile, {
            foreignKey:'id_breed',
            as:'breed'
        })
      }
     
    return Breed
}