
module.exports = (sequelize, DataTypes)=>{
    const Friend = sequelize.define('Friend',{
        id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true,},
        id_profile:DataTypes.INTEGER,
        status:DataTypes.STRING,
        created_at:DataTypes.TIMESTAMPS,
        updated_at:DataTypes.TIMESTAMPS
    }, {
        tableName:'friends', 
        timestamps:false
    })
   
    Friend.associate = (models)=>{
        Friend.belongsTo(models.Profile, {
            foreignKey:'id_profile',
            as:'profile'
        })
      }
     
    return Friend
}