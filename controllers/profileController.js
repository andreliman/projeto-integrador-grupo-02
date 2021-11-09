const ProfileModel = require("../models/ProfileModel");

exports.listAllBreeds = () => ProfileModel.listAllBreeds();
exports.listAllKinds = () => ProfileModel.listAllKinds();
exports.findKindById = async (kindId) => await ProfileModel.findKindById(kindId);
exports.findBreedsByKindId = async (kindId) => await ProfileModel.findBreedsByKindId(kindId);
exports.findBreedById = async (breedId) => await ProfileModel.findBreedById(breedId);

exports.findProfiles = async (id) => {
  const profile = await ProfileModel.findProfiles(id);

  return profile;
};

exports.findProfile = (id) => ProfileModel.findProfile(id);

exports.createProfile = ({
  user_id,
  kind_id,
  pet_name,
  birthday,
  genre,
  local,
  nickname,
  bio,
  photo_profile_path,
}) => {
  const photo_id = Math.floor(Math.random() * 10000);
  const night_mode = 1;

  const newProfile = ProfileModel.createProfile({
    user_id,
    kind_id,
    pet_name,
    birthday,
    genre,
    local,
    nickname,
    bio,
    photo_profile_path,
    photo_id,
    night_mode,
  });
  return newProfile;
};

exports.editProfile = async (
  id,
  {
    breed_id,
    pet_name,
    birthday,
    genre,
    local,
    nickname,
    bio,
    photo_profile_path,
  }
) => {
  const profile = await ProfileModel.findProfile(id);
  const { user_id, photo_id, night_mode } = profile;
  await ProfileModel.editProfile(id, {
    user_id,
    breed_id,
    pet_name,
    birthday,
    genre,
    local,
    nickname,
    bio,
    photo_profile_path,
    photo_id,
    night_mode,
  });
};

exports.deleteProfile = (id) => ProfileModel.deleteProfile(id);

exports.findVisitante = async (id) => {
  const profile = await ProfileModel.findVisitante(id);
  return profile;
};
exports.findUserProfile = async (profile_id) => {
  const profile = await ProfileModel.findUserProfile(profile_id);

  return profile;
};
exports.findAnimalByName = async ({ key }) => {
  const profile = await ProfileModel.findAnimalByName({ key });

  return profile;
};
