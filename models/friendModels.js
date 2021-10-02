const db = require('../database/models');
exports.showFriends = (profile_id) =>{
    const show = db.Friends.findAll({
        where:{profile_id:profile_id},
        order:[['id','DESC']]
    });
    return show
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