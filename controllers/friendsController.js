const friendModels = require("../models/friendModels");


exports.showFriends=(profile_id)=>friendModels.showFriends(profile_id);
exports.addFriend=(friend_id,profile_id,seguindo)=>friendModels.addFriends(friend_id,profile_id,seguindo);
