
module.exports = (sequelize, DataTypes)=>{
    const Album = sequelize.define('Album',{
        
        id_profile:DataTypes.INTEGER,

        descricao:{
            type:DataTypes.STRING,
            allowNull:false
        },
        qtd_fotos:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        data_criacao:{
            type:DataTypes.DATE,
            allowNull:false
        }},
        {
        tableName:'albuns'
    });

    Album.associate = (models)=>{
        Album.belongsTo(models.Profile,{
            foreignKey:'id_profile',
            as:'profile'
        }),
        Album.hasMany(models.Photo_Content, {
            foreignKey:'id_album',
            as:'photos_content'
        })
    };
     
    return Album
}