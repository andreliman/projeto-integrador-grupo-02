
module.exports = (sequelize, DataTypes)=>{
    const Event = sequelize.define('Event',{
     
        profile_id:DataTypes.INTEGER,
        name:{
          type:DataTypes.STRING,
          allowNull:false
        },
        beginning_date:{
          type:DataTypes.DATE,
          allowNull:false
        },
        ends_date:{
          type:DataTypes.DATE,
          allowNull:false
        },
        hour:{
          type:DataTypes.TIME,
          allowNull:false
        },
        finish_hour:{
          type:DataTypes.TIME,
          allowNull:false
        },
        description:{
          type:DataTypes.STRING,
          allowNull:false
        },
        location:{
          type:DataTypes.STRING,
          allowNull:false
        },
        num_comments:{
          type:DataTypes.INTEGER,
          allowNull:false
        },
        likes_id:{
          type:DataTypes.INTEGER,
          allowNull:false
        },
        share_id:{
          type:DataTypes.INTEGER,
          allowNull:false
        }
    }, {
        tableName:'events'
    });
  
    Event.associate = (models)=>{
        Event.belongsToMany(models.Photo,{
          through:'event_has_photos',
          as:'photo',
          foreignKey:'event_id',
          otherKey:'photo_id'
        }),
        Event.belongsToMany(models.Profile,{
          through:'profile_has_events',
          as:'profiles',
          foreignKey:'event_id',
          otherKey:'profile_id'
        }),
        Event.belongsToMany(models.Comment,{
          through:'event_has_comments',
          as:'comments',
          foreignKey:'event_id',
          otherKey:'comment_id'
        }),
        Event.belongsToMany(models.Share,{
          through:'event_has_shares',
          as:'share',
          foreignKey:'event_id',
          otherKey:'share_id'
        }),
        Event.belongsToMany(models.Like,{
          through:'event_has_likes',
          as:'likes',
          foreignKey:'event_id',
          otherKey:'like_id'
        })
      };

     
    return Event
}