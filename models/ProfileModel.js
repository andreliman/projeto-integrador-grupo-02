const db = require('../database/models');

exports.listAll = () => db.Breed.findAll({ include: "kind" }).then((rows) => rows.map((row) => row.dataValues));

exports.findProfile = (id) => {

    const profile = db.Profile.findAll({ where: { user_id: id } }).then((rows) => rows.map((row) => row.dataValues));
    return profile;
}