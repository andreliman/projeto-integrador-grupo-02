const db = require('../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.listAllKinds = () => db.Kind.findAll().then((rows) => rows.map((row) => row.dataValues));
exports.listAllBreeds = () => db.Breed.findAll().then((rows) => rows.map((row) => row.dataValues));

exports.findProfile = (id) => {
    const profile = db.Profile.findAll({ where: { user_id: id } }).then((rows) => rows.map((row) => row.dataValues));
    return profile;
}

exports.createProfile = ({ user_id, breed_id, pet_name, birthday, genre, local, nickname, bio, photo_profile_path, photo_id, night_mode }) => {
    const newProfile = db.Profile.create({ user_id, breed_id, pet_name, birthday, genre, local, nickname, bio, photo_profile_path, photo_id, night_mode });
    return newProfile;
};

exports.deleteProfile = (id) => db.Profile.destroy({ where: { id } });

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