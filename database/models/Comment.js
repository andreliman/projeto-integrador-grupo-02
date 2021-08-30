
module.exports = (sequelize, DataTypes)=>{
    const Comment = sequelize.define('Comment',{
        id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true,},
        comment:DataTypes.STRING,
        created_at:DataTypes.TIMESTAMPS,
        updated_at:DataTypes.TIMESTAMPS
    }, {
        tableName:'comments', 
        timestamps:false
    })
   
 
     
    return Comment
}