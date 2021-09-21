
module.exports = (sequelize, DataTypes)=>{
    const Friend = sequelize.define('Friend',{
        
        profile_id:DataTypes.INTEGER,
        status:{
            type:DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName:'friends'
    })
   
    Friend.associate = (models)=>{
        Friend.belongsToMany(models.Profile, {
            through:'profile_has_friends',
            foreignKey:'friend_id',
            as:'profiles'
        })
      }
     
    return Friend
}