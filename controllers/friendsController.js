const friendModels = require("../models/friendModels");


exports.showFriends=(profile_id)=>friendModels.showFriends(profile_id);
exports.showFriendsVisitante=(id)=>friendModels.showFriendsVisitante(id);
exports.addFriend=(friend_id,profile_id,seguindo)=>friendModels.addFriends(friend_id,profile_id,seguindo);
exports.countSeguidores=(profile_id)=>friendModels.countSeguidores(profile_id);
exports.countSeguindo=(profile_id)=>friendModels.countSeguindo(profile_id);
exports.countSeguidoresVisitante=(id)=>friendModels.countSeguidoresVisitante(id);
exports.countSeguindoVisitante=(id)=>friendModels.countSeguindoVisitante(id);
