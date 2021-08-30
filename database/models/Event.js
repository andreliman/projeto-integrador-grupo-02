
module.exports = (sequelize, DataTypes)=>{
    const Event = sequelize.define('Event',{
        id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true,},
        id_new_event:DataTypes.INTEGER,
        nome:DataTypes.STRING,
        data_inicio:DataTypes.DATE,
        data_fim:DataTypes.DATE,
        hora_inicio:DataTypes.TIME,
        hora_fim:DataTypes.TIME,
        descricao:DataTypes.STRING,
        localizacao:DataTypes.STRING,
        qtd_comentarios:DataTypes.INTEGER,
        likes:DataTypes.INTEGER,
        share:DataTypes.INTEGER,
        created_at:DataTypes.TIMESTAMPS,
        updated_at:DataTypes.TIMESTAMPS
    }, {
        tableName:'event', 
        timestamps:false
    })
  
    Event.associate = (models)=>{
        Event.hasOne(models.New_Event, {
            foreignKey:'id_new_event',
            as:'new_event'
        })
      },
      Event.associate = models=>{
        Event.belongsToMany(models.Profile,{
          through:'profile_has_event',
          as:'profile',
          foreignKey:'evento_id',
          otherKey:'id_profile',
          timestamps:false
        });
      },
      Event.associate = models=>{
        Event.belongsToMany(models.Comment,{
          through:'comments_has_event',
          as:'comentario',
          foreignKey:'id_event',
          otherKey:'id_comment',
          timestamps:false
        });
      },
      Event.associate = models=>{
        Event.belongsToMany(models.Share,{
          through:'event_has_share',
          as:'compartilhar',
          foreignKey:'id_event',
          otherKey:'id_share',
          timestamps:false
        });
      },
      Event.associate = models=>{
        Event.belongsToMany(models.Like,{
          through:'likes_has_event',
          as:'curtir',
          foreignKey:'id_event',
          otherKey:'id_like',
          timestamps:false
        });
      }

     
    return Event
}