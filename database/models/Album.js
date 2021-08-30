
module.exports = (sequelize, DataTypes)=>{
    const Album = sequelize.define('Album',{
        id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true,},
        id_profile:DataTypes.INTEGER,
        descricao:DataTypes.STRING,
        qtd_fotos:DataTypes.INTEGER,
        created_at:DataTypes.TIMESTAMPS,
        updated_at:DataTypes.TIMESTAMPS
    }, {
        tableName:'album', 
        timestamps:false
    })
    Album.associate = (models)=>{
        Album.belongsTo(models.Profile,{
            foreignKey:'id_profile',
            as:'profile'
        })
    }
    Album.associate = (models)=>{
        Album.hasMany(models.Photos_Content, {
            foreignKey:'id_album',
            as:'photos_content'
        })
      }
     
    return Album
}