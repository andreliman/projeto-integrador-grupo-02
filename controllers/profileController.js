const ProfileModel = require('../models/ProfileModel');

exports.listAll = () => ProfileModel.listAll();

exports.findProfile = async (id) => {
    const profile = await ProfileModel.findProfile(id);

    return profile;    
}
exports.findVisitante = async (id) => {
    const profile = await ProfileModel.findVisitante(id);
    return profile;    
}
exports.findUserProfile = async (profile_id) => {
    const profile = await ProfileModel.findUserProfile(profile_id);
    

    return profile;    
}
exports.findAnimalByName = async ({key}) => {
    const profile = await ProfileModel.findAnimalByName({key});

    return profile;    
}