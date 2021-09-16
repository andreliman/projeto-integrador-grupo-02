const db = require('../database/models');

exports.listAll = () =>
    db.Breed.findAll({ include: "kind" }).then((rows) => rows.map((row) => row.dataValues));