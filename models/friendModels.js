const db = require('../database/models');
exports.showFriends = (profile_id) =>{
    const show = db.Friends.findAll({
        where:{profile_id:profile_id},
        order:[['id','DESC']]
    });
    return show
}
exports.addFriends = (owner_id,profile_id,status) =>{
    const criar = db.Friend.create(owner_id,profile_id,status)
    return criar
   }