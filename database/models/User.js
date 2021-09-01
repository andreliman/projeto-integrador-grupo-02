
module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define('User',{
        nome:{
            type:DataTypes.STRING,
            allowNull:false
        },
        telefone:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        data_criacao:{
            type:DataTypes.DATE,
            allowNull:false
        },
        senha:{
            type:DataTypes.STRING,
            allowNull: false
        }},
        {
        tableName:'users'
    })
    User.associate = (models)=>{
        User.hasMany(models.Profile, {
            foreignKey:'id_user',
            as:'profile'
        })
      }
     
    return User
}