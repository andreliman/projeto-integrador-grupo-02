const friendModels = require("../models/friendModels");


exports.showFriends=(profile_id)=>friendModels.showFriends(profile_id);
exports.addFriend=(owner_id,profile_id,status)=>friendModels.addFriends(owner_id,profile_id,status);
