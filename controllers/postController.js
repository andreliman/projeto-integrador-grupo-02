const postModels = require("../models/postModels");


exports.showPosts=()=>postModels.showPost();
exports.criarPost=({user,post,photo_post_path,photo_id})=>postModels.createNewPost({user,post,photo_post_path,photo_id});
/*exports.delete=(id)=>photoModels.deletarPhoto(id);*/