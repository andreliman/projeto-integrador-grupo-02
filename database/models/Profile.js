
module.exports = (sequelize, DataTypes)=>{
    const Profile = sequelize.define('Profile',{
        
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        breed_id: {
          type: DataTypes.INTEGER,
          allowNUll: false
        },
        pet_name:{
          type:DataTypes.STRING,
          allowNull:false
        },
        birthday:{
          type:DataTypes.DATE,
          allowNull:false
        },
        genre:{
          type:DataTypes.STRING,
          alowNull:false
        },
        local:{
          type:DataTypes.TEXT,
          allowNull:false
        },
        nickname:{
          type:DataTypes.STRING,
          allowNull:false
        },
        bio:DataTypes.TEXT,
        photo_profile_path:DataTypes.STRING,
        photo_id:DataTypes.STRING
        
      },{
        tableName:'profiles', 
      }
    );

    Profile.associate = (models)=>{
        Profile.belongsTo(models.User,{
            foreignKey:'user_id',
            as:'user'
        }),
        Profile.belongsTo(models.Breed, {
            foreignKey:'breed_id',
            as:'breed'
        }),
        Profile.belongsToMany(models.Share, {
          through:'profile_has_shares',
          foreignKey:'share_id',
          as:'shares'
        }),
        Profile.belongsToMany(models.Event,{
          through:'profile_has_events',
          foreignKey:'profile_id',
          as:'events',          
          otherKey:'event_id'
        }),
        Profile.belongsToMany(models.Post,{
          through:'profile_has_posts',
          as:'posts',
          foreignKey:'posts_id',
        }),
        Profile.belongsToMany(models.Friend, {
          through:'profile_has_friends',
          foreignKey:'friend_id',
          as:'friends'
        }),
        Profile.belongsTo(models.Like, {
          foreignKey:'like_id',
          as:'like'
        })
      };
     
    return Profile
};