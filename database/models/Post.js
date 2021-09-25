
module.exports = (sequelize, DataTypes)=>{
    const Post = sequelize.define('Post',{
        
        profile_id:DataTypes.INTEGER,
        post:{
          type:DataTypes.TEXT,
          allowNull:false
        },
        photo_post_path:DataTypes.STRING,
        photo_id:DataTypes.STRING,
        
        num_likes:DataTypes.INTEGER,
        num_comments:DataTypes.INTEGER,
        num_share:DataTypes.INTEGER
        
    }, {
        tableName:'posts'
    });
    Post.associate = models=>{
        Post.belongsToMany(models.Profile,{
          through: 'profile_has_posts',  
          foreignKey:'post_id',
          as:'profiles',
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
        })
    };

     
    return Post
}