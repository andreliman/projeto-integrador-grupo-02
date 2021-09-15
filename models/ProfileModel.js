const db = require('../database/models');

exports.listAll = () =>
    db.Breed.findAll().then((rows) => rows.map((row) => row.dataValues));