
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
      },
      Like.associate = models=>{
        Like.belongsToMany(models.Post,{
          through:'post_has_likes',
          as:'post',
          foreignKey:'id_like',
          otherKey:'id_post',
          timestamps:false
        });
      },
      Like.associate = models=>{
        Like.belongsToMany(models.Event,{
          through:'likes_has_event',
          as:'evento',
          foreignKey:'id_like',
          otherKey:'id_event',
          timestamps:false
        });
      }
     
    return Like
}