const postModels = require("../models/postModels");


exports.showPosts=()=>postModels.showPost();
exports.criarPost=({post,photo_post_path})=>postModels.createNewPost({post,photo_post_path});
/*exports.delete=(id)=>photoModels.deletarPhoto(id);*/