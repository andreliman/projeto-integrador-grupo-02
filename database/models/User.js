
module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define('User',{
        id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true,},
        nome:DataTypes.STRING,
        telefone:DataTypes.STRING,
        email:DataTypes.STRING,
        senha:DataTypes.STRING,
        created_at:DataTypes.TIMESTAMPS,
        updated_at:DataTypes.TIMESTAMPS
    }, {
        tableName:'users', 
        timestamps:false
    })
    User.associate = (models)=>{
        User.hasMany(models.Profile, {
            foreignKey:'id_user',
            as:'profile'
        })
      }
     
    return User
}