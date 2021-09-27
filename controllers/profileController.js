const ProfileModel = require('../models/ProfileModel');

exports.listAll = () => ProfileModel.listAll();

exports.findProfile = async (id) => {
    const profile = await ProfileModel.findProfile(id);

    return profile;    
}