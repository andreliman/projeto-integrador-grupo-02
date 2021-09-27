const db = require("../database/models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op

exports.showPost = () =>{
  const show = db.Post.findAll({
      order:[['id','DESC']]
  });
  return show
 }

exports.createNewPost = (profile_id,post,photo_post_path,photo_id) =>{

 const criar = db.Post.create(profile_id,post,photo_post_path,photo_id)
 return criar
}

  exports.deletarPost = (id) =>{
   db.Post.destroy({where:{id}})
   const listar =  db.Post.findAll();
   return listar;
  }
  

  