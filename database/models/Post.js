
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
    
     
    return Post
}