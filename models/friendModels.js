const db = require('../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.showFriends = async (profile_id) =>{

    const data = await db.Friend.findAll({
        where:{profile_id:profile_id},
    }).then((rows) => rows.map((row) => row.dataValues));
    const id_friend = data.map((row) => row.friend_id)
    const amigos = await db.Profile.findAll({
        where:{
            id:id_friend
        }
    })
    return amigos
}
exports.showFriendsVisitante = async (id) =>{
    const data = await db.Friend.findAll({
        where:{profile_id:id},
    }).then((rows) => rows.map((row) => row.dataValues));
    const id_friend = data.map((row) => row.friend_id)
    const amigos = await db.Profile.findAll({
        where:{
            id:id_friend
        }
    })
    return amigos
}

exports.addFriends = (friend_id,profile_id,seguindo) =>{
   
    const criar = 
    db.Friend.create({
        friend_id:friend_id,
        profile_id: profile_id,
        status:seguindo
      })
    
      return criar
   }

   exports.countSeguidores = (profile_id) =>{
   
    const seguidores = 
    db.Friend.findAndCountAll({
        where:{
            friend_id:profile_id
        }
      })
      return seguidores
   }
   exports.countSeguindo = (profile_id) =>{
   
    const seguindo = 
    db.Friend.findAndCountAll({
        where:{
            profile_id:profile_id
        }
      })
    
      return seguindo
   }



   exports.countSeguidoresVisitante = (id) =>{
   
    const seguidores = 
    db.Friend.findAndCountAll({
        where:{
            friend_id:id
        }
      })
      return seguidores
   }
   exports.countSeguindoVisitante = (id) =>{
   
    const seguindo = 
    db.Friend.findAndCountAll({
        where:{
            profile_id:id
        }
      })
    
      return seguindo
   }