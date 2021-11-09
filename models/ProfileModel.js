const db = require("../database/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

exports.listAllKinds = () =>
  db.Kind.findAll().then((rows) => rows.map((row) => row.dataValues));

exports.findKindById = (kindId) => db.Kind.findOne({ where: { id: kindId } });

exports.findBreedsByKindId = (kindId) =>
db.Breed.findAll({ where: { kind_id: kindId } }).then((rows) => rows.map((row) => row.dataValues));

exports.findBreedById = (breedId) => db.Breed.findOne({ where: { id: breedId } });

exports.listAllBreeds = () =>
  db.Breed.findAll().then((rows) => rows.map((row) => row.dataValues));

exports.findProfiles = (id) => {
  const profile = db.Profile.findAll({ where: { user_id: id } }).then((rows) =>
    rows.map((row) => row.dataValues)
  );
  return profile;
};

exports.findProfile = (id) => {
  const profile = db.Profile.findByPk(id, {
    attributes: [
      'id',
      'user_id',
      'kind_id',
      'breed_id',
      'pet_name',
      [Sequelize.fn('date_format', Sequelize.col('birthday'), '%Y-%m-%d'), 'birthday'],
      'genre',
      'local',
      'nickname',
      'bio',
      'photo_profile_path',
      'photo_id',
      'night_mode',
    ]
  });
  return profile;
};

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
  photo_id,
  night_mode,
}) => {
  const newProfile = db.Profile.create({
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

exports.editProfile = (
  id,
  {
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
  }
) => {
  return db.Profile.update(
    {
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
    },
    { where: { id } }
  );
};
exports.deleteProfile = (id) => db.Profile.destroy({ where: { id } });

exports.findUserProfile = async (profile_id) => {
  const profile = await db.Profile.findOne({
    where: {
      id: profile_id,
    },
  });
  return profile;
};
exports.findVisitante = (id) => {
  const profile = db.Profile.findByPk(id);
  return profile;
};

exports.findAnimalByName = ({ key }) => {
  const petName = db.Profile.findAll({
    where: { pet_name: { [Op.like]: `%${key}%` } },
  }).then((rows) => rows.map((row) => row.dataValues));
  return petName;
};
