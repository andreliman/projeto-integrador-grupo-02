
module.exports = (sequelize, DataTypes)=>{
    const Friend = sequelize.define('Friend',{
        
        profile_id:DataTypes.INTEGER,
        friend_id: DataTypes.INTEGER,
        status: DataTypes.STRING,
    }, {
        tableName:'friends'
    })
   
    Friend.associate = (models)=>{
        Friend.belongsTo(models.Profile, {
            foreignKey:'profile_id',
            as:'profiles'
        })
      };
     
    return Friend
}