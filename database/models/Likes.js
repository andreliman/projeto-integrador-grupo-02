
module.exports = (sequelize, DataTypes)=>{
    const Like = sequelize.define('Like',{
        id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true,},
        id_profile:DataTypes.INTEGER,
        created_at:DataTypes.TIMESTAMPS,
        updated_at:DataTypes.TIMESTAMPS
    }, {
        tableName:'likes', 
        timestamps:false
    })
   
    Like.associate = (models)=>{
        Like.hasOne(models.Profile, {
            foreignKey:'id_profile',
            as:'profile'
        })
      }
     
    return Like
}