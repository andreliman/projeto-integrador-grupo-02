
module.exports = (sequelize, DataTypes)=>{
    const Kind = sequelize.define('Kind',{
        id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true,},
        tipo:DataTypes.STRING,
        created_at:DataTypes.TIMESTAMPS,
        updated_at:DataTypes.TIMESTAMPS
    }, {
        tableName:'kind', 
        timestamps:false
    })
    Kind.associate = (models)=>{
        Kind.hasMany(models.Breed,{
            foreignKey:'kind_id',
            as:'breed'
        })
    }
     
    return Kind
}