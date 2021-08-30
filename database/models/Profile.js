
module.exports = (sequelize, DataTypes)=>{
    const Profile = sequelize.define('Profile',{
        id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true,},
        id_user:DataTypes.INTEGER,
        id_breed:DataTypes.INTEGER,
        pet_name:DataTypes.STRING,
        birthday:DataTypes.DATE,
        localizacao:DataTypes.STRING,
        nickname:DataTypes.STRING,
        bio:DataTypes.STRING,
        photo_profile:DataTypes.STRING,
        created_at:DataTypes.TIMESTAMPS,
        updated_at:DataTypes.TIMESTAMPS
    }, {
        tableName:'profile', 
        timestamps:false
    })
    Profile.associate = (models)=>{
        Profile.belongsTo(models.User,{
            foreignKey:'id_user',
            as:'user'
        })
    }
    Profile.associate = (models)=>{
        Profile.hasOne(models.Breed, {
            foreignKey:'id_breed',
            as:'breed'
        })
      }
      Profile.associate = (models)=>{
        Profile.hasMany(models.New_Event, {
            foreignKey:'id_profile',
            as:'profile'
        })
      }
     
    return Profile
}