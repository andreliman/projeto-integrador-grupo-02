
module.exports = (sequelize, DataTypes)=>{
    const Profile = sequelize.define('Profile',{
        
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        breed_id: {
          type: DataTypes.INTEGER,
          allowNull: false
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
        photo_id:DataTypes.STRING,
        night_mode: DataTypes.INTEGER
        
      },{
        tableName:'profiles', 
      }
    );

    Profile.associate = (models)=>{
        Profile.belongsTo(models.User,{
            foreignKey:'user_id',
            as:'user'
        });
        Profile.belongsTo(models.Breed, {
            foreignKey:'breed_id',
            as:'breed'
        });
        Profile.belongsToMany(models.Share, {
          through:'profile_has_shares',
          foreignKey:'profile_id',
          as:'shares'
        });
        Profile.belongsToMany(models.Event,{
          through:'profile_has_events',
          foreignKey:'profile_id',
          as:'events',          
        });
        Profile.belongsToMany(models.Post,{
          through:'profile_has_posts',
          as:'posts',
          foreignKey:'profile_id',
        });
        Profile.belongsToMany(models.Friend, {
          through:'profile_has_friends',
          foreignKey:'profile_id',
          as:'friends'
        });
        Profile.hasOne(models.Like, {
          foreignKey:'profile_id',
          as:'like'
        })
      };
     
    return Profile
};