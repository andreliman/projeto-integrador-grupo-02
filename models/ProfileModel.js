const db = require('../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
exports.listAll = () => db.Breed.findAll({ include: "kind" }).then((rows) => rows.map((row) => row.dataValues));

exports.findProfile = (id) => {

    const profile = db.Profile.findAll({ where: { user_id: id } }).then((rows) => rows.map((row) => row.dataValues));
    return profile;
}
exports.findUserProfile = (profile_id) => {

    const profile = db.Profile.findOne({ where: { 
       id:profile_id } })
    return profile;
}
exports.findVisitante = (id) => {

    const profile = db.Profile.findByPk(id)
    return profile;
}

exports.findAnimalByName = ({key}) => {
    const petName = db.Profile.findAll({
        where:
        { pet_name:
            {[Op.like]:`%${key}%`}}}).then((rows) => rows.map((row) => row.dataValues));
    return petName;
}
       
            

        
