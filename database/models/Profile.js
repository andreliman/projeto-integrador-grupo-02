
module.exports = (sequelize, DataTypes)=>{
    const Profile = sequelize.define('Profile',{
        id_user:DataTypes.INTEGER,
        id_breed:DataTypes.INTEGER,
        pet_name:{
          type:DataTypes.STRING,
          allowNull:false
        },
        birthday:{
          type:DataTypes.DATE,
          allowNull:false
        },
        sexo:{
          type:DataTypes.INTEGER,
          alowNull:false
        },
        localizacao:{
          type:DataTypes.STRING,
          allowNull:false
        },
        nickname:{
          type:DataTypes.STRING,
          allowNull:false
        },
        bio:DataTypes.STRING,
        photo_profile:DataTypes.STRING,
        
      },{
        tableName:'profiles', 
      }
    );

    Profile.associate = (models)=>{
        Profile.belongsTo(models.User,{
            foreignKey:'id_user',
            as:'user'
        }),
        Profile.belongsTo(models.Breed, {
            foreignKey:'id_breed',
            as:'breed'
        }),
        Profile.belongsTo(models.Share, {
          foreignKey:'id_share',
          as:'share'
      }),
        Profile.hasMany(models.New_Event, {
            foreignKey:'id_profile',
            as:'profile'
        }),
        Profile.belongsToMany(models.Comment,{
          through:'profile_has_comments',
          as:'comentario',
          foreignKey:'id_profile',
          otherKey:'id_comment',
          timestamps:false
        }),
        Profile.belongsToMany(models.Event,{
          through:'profile_has_event',
          as:'evento',
          foreignKey:'id_profile',
          otherKey:'event_id',
          timestamps:false
        })
      };
     
    return Profile
};