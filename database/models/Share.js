
module.exports = (sequelize, DataTypes)=>{
    const Share = sequelize.define('Share',{
        id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true,},
        id_profile:DataTypes.INTEGER,
        created_at:DataTypes.TIMESTAMPS,
        updated_at:DataTypes.TIMESTAMPS
    }, {
        tableName:'share', 
        timestamps:false
    })
   
    Share.associate = (models)=>{
        Share.hasOne(models.Profile, {
            foreignKey:'id_profile',
            as:'profile'
        })
      }
 
     
    return Share
}