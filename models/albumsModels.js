const db = require("../database/models");
exports.showAlbums = (profile_id) => {
  const show = db.Album.findAll({
    include: {
      model: db.Photo,
      as: "photo",
      required: true,
    },
    where: { profile_id: profile_id },
    order: [["id", "DESC"]],
  });
  return show;
};
exports.detalheAlbum = (id) => {
  const detalhe = db.Album.findOne({
    include: {
      model: db.Photo,
      as: "photo",
      required: true,
    },
    where: { id: id },
    order: [["id", "DESC"]],
  });
  return detalhe;
};
