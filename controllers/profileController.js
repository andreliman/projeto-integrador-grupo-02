const ProfileModel = require('../models/ProfileModel');

exports.listAll = () => ProfileModel.listAll();

exports.findProfile = async (id) => {
    const profile = await ProfileModel.findProfile(id);

    return profile;    
}
exports.findAnimalByName = async ({key}) => {
    const profile = await ProfileModel.findAnimalByName({key});

    return profile;    
}