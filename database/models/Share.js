
module.exports = (sequelize, DataTypes)=>{
    const Share = sequelize.define('Share',{
        id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true,},
        id_profile:DataTypes.INTEGER,
        created_at:DataTypes.TIMESTAMPS,
        updated_at:DataTypes.TIMESTAMPS
    }, {
        tableName:'share', 
        timestamps:false
    })
   
    Share.associate = (models)=>{
        Share.hasOne(models.Profile, {
            foreignKey:'id_profile',
            as:'profile'
        })
      },
      Share.associate = models=>{
        Share.belongsToMany(models.Post,{
          through:'post_has_share',
          as:'post',
          foreignKey:'id_share',
          otherKey:'id_post',
          timestamps:false
        });
      },
      Share.associate = models=>{
        Share.belongsToMany(models.Event,{
          through:'event_has_share',
          as:'evento',
          foreignKey:'id_share',
          otherKey:'id_event',
          timestamps:false
        });
      }
 
     
    return Share
}