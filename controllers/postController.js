const postModels = require("../models/postModels");


exports.showPosts=(profile_id)=>postModels.showPost(profile_id);
exports.showPostsVisitante=(id)=>postModels.showPostsVisitante(id);
exports.criarPost=({profile_id,post,photo_post_path})=> {
    const photo_id = Math.floor(Math.random()*10000);

    return postModels.createNewPost({profile_id,post,photo_post_path,photo_id});
}
/*exports.delete=(id)=>photoModels.deletarPhoto(id);*/