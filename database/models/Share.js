
module.exports = (sequelize, DataTypes)=>{
    const Share = sequelize.define('Share',{
        
        profile_id:{
          type: DataTypes.INTEGER,
          allowNull: false
        },       
    }, {
        tableName:'shares' 
    });
   
    Share.associate = (models)=>{
        Share.belongsToMany(models.Profile, {
          through:'profile_has_shares',
          foreignKey:'profile_id',
          as:'profile'
        }),
        Share.belongsToMany(models.Post,{
          through:'post_has_shares',
          as:'post',
          foreignKey:'share_id',
          otherKey:'post_id'
        }),
        Share.belongsToMany(models.Event,{
          through:'event_has_shares',
          as:'events',
          foreignKey:'share_id',
          otherKey:'event_id'
        }),
        Share.belongsToMany(models.Photo,{
          through:'photo_has_shares',
          as:'photos',
          foreignKey:'share_id',
          otherKey:'photo_id'
        })
      };
      
 
     
    return Share
};