
module.exports = (sequelize, DataTypes)=>{
    const Photo = sequelize.define('Photo',{
        photo_id:DataTypes.STRING,
        profile_id:DataTypes.STRING,
        photo_path:{
            type:DataTypes.STRING,
            allowNull:false
        }}, 
        {
        tableName:'photos'
    });

    Photo.associate = (models)=>{
        Photo.belongsTo(models.Profile,{
            foreignKey:'profile_id',
            as:'profile'
        }),
        Photo.belongsToMany(models.Album,{
            through:'album_has_photos',
            foreignKey:'album_id',
            as:'album'
        }),
        
        Photo.belongsToMany(models.Comment,{
            through:'photo_has_comments',
            foreignKey:'comment_id',
            as:'comment'
        }),
        Photo.belongsToMany(models.Share,{
            through:'photo_has_shares',
            foreignKey:'share_id',
            as:'share'
        }),
        Photo.belongsToMany(models.Like,{
            through:'photo_has_likes',
            foreignKey:'like_id',
            as:'likes'
        })
    };
     
    return Photo
}