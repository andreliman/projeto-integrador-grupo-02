const postModels = require("../models/postModels");


exports.showPosts=(profile_id)=>postModels.showPost(profile_id);
exports.criarPost=({profile_id,post,photo_post_path,photo_id})=>postModels.createNewPost({profile_id,post,photo_post_path,photo_id});
/*exports.delete=(id)=>photoModels.deletarPhoto(id);*/