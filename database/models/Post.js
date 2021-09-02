
module.exports = (sequelize, DataTypes)=>{
    const Post = sequelize.define('Post',{
        
        profile_id:DataTypes.INTEGER,
        post:{
          type:DataTypes.STRING,
          allowNull:false
        },
        
        likes:DataTypes.INTEGER,
        num_comments:DataTypes.INTEGER,
        share:DataTypes.INTEGER
        
    }, {
        tableName:'posts'
    });
    Post.associate = models=>{
        Post.hasOne(models.Profile,{
            foreignKey:'profile_id',
            as:'profile',
        }),
        Post.belongsToMany(models.Comment,{
          through:'post_has_comments',
          as:'comentario',
          foreignKey:'post_id',
          otherKey:'comment_id'
        }),
      
        Post.belongsToMany(models.Share,{
          through:'post_has_shares',
          as:'shares',
          foreignKey:'post_id',
          otherKey:'share_id'
        }),
     
        Post.belongsToMany(models.Like,{
          through:'post_has_likes',
          as:'likes',
          foreignKey:'post_id',
          otherKey:'like_id'
        }),
      
        Post.belongsToMany(models.Photo,{
          through:'post_has_photos',
            foreignKey:'photo_id',
            as:'photos'
        })
    };

     
    return Post
}