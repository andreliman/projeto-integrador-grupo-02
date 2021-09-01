
module.exports = (sequelize, DataTypes)=>{
    const Photo_Content = sequelize.define('Photo_Content',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true, 
            autoIncrement:true
        },
        id_album:DataTypes.INTEGER,
        id_post:DataTypes.INTEGER,

        photo:DataTypes.STRING,
        photos_tipo:DataTypes.STRING,
        created_at:DataTypes.TIMESTAMPS,
        updated_at:DataTypes.TIMESTAMPS
    }, {
        tableName:'photos_content', 
        timestamps:false
    })
    Photo_Content.associate = (models)=>{
        Photo_Content.belongsTo(models.Album,{
            foreignKey:'id_album',
            as:'album'
        })
    }
    Photo_Content.associate = (models)=>{
        Photo_Content.belongsTo(models.Post,{
            foreignKey:'id_post',
            as:'post'
        })
    }
     
    return Photo_Content
}