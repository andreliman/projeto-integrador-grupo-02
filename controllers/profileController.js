const ProfileModel = require('../models/ProfileModel');

exports.listAllBreeds = () => ProfileModel.listAllBreeds();
exports.listAllKinds = () => ProfileModel.listAllKinds();

exports.findProfile = async (id) => {
    const profile = await ProfileModel.findProfile(id);

    return profile;    
}

exports.createProfile = ({ user_id, breed_id, pet_name, birthday, genre, local, nickname, bio, photo_profile_path }) => {
    const photo_id = Math.floor(Math.random()*10000);
    const night_mode = 1;
    
    const newProfile = ProfileModel.createProfile({ user_id, breed_id, pet_name, birthday, genre, local, nickname, bio, photo_profile_path, photo_id, night_mode });
    return newProfile;
}

exports.deleteProfile = (id) => ProfileModel.deleteProfile(id);

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