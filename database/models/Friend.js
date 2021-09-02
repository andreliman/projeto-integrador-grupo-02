
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
        Friend.belongsTo(models.Profile, {
            through:'profile_has_friends',
            foreignKey:'profile_id',
            as:'profile'
        })
      }
     
    return Friend
}