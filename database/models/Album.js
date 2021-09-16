
module.exports = (sequelize, DataTypes)=>{
    const Album = sequelize.define('Album',{
        
        profile_id:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        description:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        num_photos:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        creation_date:{
            type:DataTypes.DATE,
            allowNull:false
        }},
        {
        tableName:'albuns'
    });

    Album.associate = (models)=>{
        Album.belongsTo(models.Profile,{
            foreignKey:'profile_id',
            as:'profile'
        }),
        Album.belongsToMany(models.Photo, {
            through:'album_has_photos',
            foreignKey:'album_id',
            as:'photos'
        })
    };
     
    return Album
}