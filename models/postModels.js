const db = require("../database/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

exports.showPost = async (profile_id) => {
  const data = await db.Friend.findAll({
    where: { profile_id: profile_id },
  }).then((rows) => rows.map((row) => row.dataValues));
  const id_friend = data.map((row) => row.friend_id);

  const profile = db.Profile.findByPk(profile_id);
  const profileAmigos = await db.Profile.findAll({
    where: {
      id: id_friend,
    },
  });
  const show = db.Post.findAll({
    include: {
      model: db.Profile,
      as: "profiles",
      required: true,
    },
    where: {
      [Op.or]: [{ profile_id: profile_id }, { profile_id: id_friend }],
    },
  });
  return show;
};

exports.showPostsUser = (profile_id) => {
  const show = db.Post.findAll({
    where: { profile_id: profile_id },
    order: [["id", "DESC"]],
  });
  return show;
};
exports.showPostsVisitante = (id) => {
  const show = db.Post.findAll({
    where: { profile_id: id },
    order: [["id", "DESC"]],
  });
  return show;
};

exports.createNewPost = (profile_id, post, photo_post_path, photo_id) => {
  const criar = db.Post.create(profile_id, post, photo_post_path, photo_id);
  return criar;
};

exports.countPosts = (profile_id) => {
  const totalPosts = db.Post.findAndCountAll({
    where: {
      profile_id: profile_id,
    },
  });
  return totalPosts;
};

exports.deletarPost = (id) => {
  db.Post.destroy({ where: { id } });
  const listar = db.Post.findAll();
  return listar;
};
