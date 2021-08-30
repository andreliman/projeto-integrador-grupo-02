
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
        Event.hasOne(models.Profile,{
            foreignKey:'id_profile',
            as:'profile'
        })
    }
    New_Event.associate = (models)=>{
        New_Event.hasOne(models.Event, {
            foreignKey:'id_new_event',
            as:'new_event'
        })
      }
     
    return Event
}