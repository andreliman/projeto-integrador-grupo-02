
module.exports = (sequelize, DataTypes)=>{
    const New_Event = sequelize.define('New_Event',{
        id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true,},
        id_profile:DataTypes.INTEGER,
        nome_evento:DataTypes.STRING,
        data_inicial:DataTypes.DATE,
        data_final:DataTypes.DATE,
        hora_inicial:DataTypes.TIME,
        hora_final:DataTypes.TIME,
        dia_todo:DataTypes.INT,
        descricao:DataTypes.STRING,
        foto_capa:DataTypes.STRING,
        created_at:DataTypes.TIMESTAMPS,
        updated_at:DataTypes.TIMESTAMPS
    }, {
        tableName:'new_event', 
        timestamps:false
    })
    New_Event.associate = (models)=>{
        New_Event.belongsTo(models.Profile,{
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
     
    return New_Event
}