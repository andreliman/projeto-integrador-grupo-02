
module.exports = (sequelize, DataTypes)=>{
    const Event = sequelize.define('Event',{
        event_id:{
          type:DataTypes.CHAR(40),
          allowNull: false
        },
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
          type:DataTypes.TEXT,
          allowNull:false
        },
        local:{
          type:DataTypes.TEXT,
          allowNull:false
        },
        photo_event_path: DataTypes.STRING,
        photo_id:DataTypes.STRING,

        num_comments:{
          type:DataTypes.INTEGER,
          
        },
        likes_id:{
          type:DataTypes.INTEGER,
          
        },
        share_id:{
          type:DataTypes.INTEGER,
         
        }
    }, {
        tableName:'events'
    });
  
    Event.associate = (models)=>{
        
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