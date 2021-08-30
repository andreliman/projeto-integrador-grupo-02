
module.exports = (sequelize, DataTypes)=>{
    const Post = sequelize.define('Post',{
        id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true,},
        id_profile:DataTypes.INTEGER,
        post:DataTypes.STRING,
        link:DataTypes.STRING,
        likes:DataTypes.INTEGER,
        qtd_comentarios:DataTypes.INTEGER,
        share:DataTypes.INTEGER,
        photo:DataTypes.STRING,
        created_at:DataTypes.TIMESTAMPS,
        updated_at:DataTypes.TIMESTAMPS
    }, {
        tableName:'post', 
        timestamps:false
    })
    Post.associate = models=>{
        Post.belongsTo(models.Profile,{
            foreignKey:'id_profile',
            as:'profile',
        });
      },
      Post.associate = models=>{
        Post.belongsToMany(models.Comment,{
          through:'post_has_comments',
          as:'comentario',
          foreignKey:'post_id',
          otherKey:'comments_id',
          timestamps:false
        });
      },
      Post.associate = models=>{
        Post.belongsToMany(models.Share,{
          through:'post_has_share',
          as:'compartilhar',
          foreignKey:'id_post',
          otherKey:'id_share',
          timestamps:false
        });
      },
      Post.associate = models=>{
        Post.belongsToMany(models.Like,{
          through:'post_has_likes',
          as:'curtir',
          foreignKey:'id_post',
          otherKey:'id_likes',
          timestamps:false
        });
      },
      Post.associate = (models)=>{
        Post.belongsTo(models.Proto_Content,{
            foreignKey:'id_post',
            as:'foto'
        })
    }

     
    return Post
}