
module.exports = (sequelize, DataTypes)=>{
    const Comment = sequelize.define('Comment',{
        id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true,},
        comment:DataTypes.STRING,
        created_at:DataTypes.TIMESTAMPS,
        updated_at:DataTypes.TIMESTAMPS
    }, {
        tableName:'comments', 
        timestamps:false
    })
    Comment.associate = models=>{
        Comment.belongsToMany(models.Event,{
          through:'comments_has_event',
          as:'post',
          foreignKey:'id_comment',
          otherKey:'id_event',
          timestamps:false
        });
      },
      Comment.associate = models=>{
        Comment.belongsToMany(models.Post,{
          through:'post_has_comments',
          as:'post',
          foreignKey:'comments_id',
          otherKey:'post_id',
          timestamps:false
        });
      },
      Comment.associate = models=>{
        Comment.belongsToMany(models.Profile,{
          through:'profile_has_comments',
          as:'profile',
          foreignKey:'id_comment',
          otherKey:'id_profile',
          timestamps:false
        });
      }
   
 
     
    return Comment
}