
module.exports = (sequelize, DataTypes)=>{
    const Like = sequelize.define('Like',{
        
        profile_id:DataTypes.INTEGER
    }, {
        tableName:'likes'
    });
   
    Like.associate = (models)=>{
        Like.belongsTo(models.Profile, {
            foreignKey:'profile_id',
            as:'profile'
        }),
        Like.belongsToMany(models.Post,{
          through:'post_has_likes',
          as:'post',
          foreignKey:'like_id',
          otherKey:'post_id'
        }),
        Like.belongsToMany(models.Event,{
          through:'event_has_likes',
          as:'event',
          foreignKey:'like_id',
          otherKey:'event_id'
        }),
        Like.belongsToMany(models.Photo,{
          through:'photo_has_likes',
          as:'photo',
          foreignKey:'like_id',
          otherKey:'photo_id'
        }),
        Like.belongsToMany(models.Comment,{
          through:'comment_has_likes',
          as:'comment',
          foreignKey:'like_id',
          otherKey:'comment_id'
        })
      }
     
    return Like
}