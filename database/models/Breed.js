
module.exports = (sequelize, DataTypes)=>{
    const Breed = sequelize.define('Breed',{
       nome:{
            type:DataTypes.STRING,
            allowNull: false
        },
        kind_id:DataTypes.INTEGER,
    },{
        tableName:'breeds', 
        
    });
    Breed.associate = (models)=>{
        Breed.belongsTo(models.Kind,{
            foreignKey:'kind_id',
            as:'kind'
        }),
        Breed.hasMany(models.Profile, {
            foreignKey:'id_breed',
            as:'breed'
        })
    };
     
    return Breed
}