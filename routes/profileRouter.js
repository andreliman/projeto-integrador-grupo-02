const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerConfig = require("../config/multer");
const moment = require("moment");
const ProfileController = require("../controllers/ProfileController");
const verificarUserLogado = require("../middlewares/verificarUserLogado");

// Criar
router.get("/create", verificarUserLogado, async (req, res) => {
  const { name } = req.session.user;
  const kinds = await ProfileController.listAllKinds();
  res.render("criarPerfil", { kinds, name });
});

router.post(
  "/create",
  multer(multerConfig).single("photo"),
  async (req, res) => {
    const { user } = req.session;
    // const { location:photo_profile_path = '', key:photo_id = '' } = req.file;
    const { key: photo_profile_path = "" } = req.file;

    const { kind_id, pet_name, birthday, genre, local, nickname } =
      req.body;
    const user_id = user.id;

    await ProfileController.createProfile({
      user_id,
      kind_id,
      pet_name,
      birthday,
      genre,
      local,
      nickname,
      photo_profile_path,
    });
    res.redirect("/manimal/profile/select");
  }
);
// Criar

// Selecionar
router.get("/select", verificarUserLogado, async (req, res) => {
  const { id, name } = req.session.user;

  const profiles = await ProfileController.findProfiles(id);

  req.session.profiles = profiles;

  res.render("selecionarPerfil", {
    title: "Seleção de perfil",
    profiles,
    name,
  });
});

//Editar

router.get("/edit/:id", verificarUserLogado, async (req, res) => {
  const { name } = req.session.user;
  const { id } = req.params;

  const profile = await ProfileController.findProfile(id);

  const kindId = profile.kind_id;
  const breedId = profile.breed_id;

  const kind = await ProfileController.findKindById(kindId);
  const breeds = await ProfileController.findBreedsByKindId(kindId);
  const breed = await ProfileController.findBreedById(breedId);

  res.render("editarPerfil", { profile, name, breeds, kind, breed });
});

router.put(
  "/edit/:id",
  verificarUserLogado,
  multer(multerConfig).single("photo"),
  async function (req, res) {
    const { id } = req.params;
    const { key: photo_profile_path = "", originalname } = req.file;
    const { breed_id, pet_name, birthday, genre, local, nickname, bio } =
      req.body;

    await ProfileController.editProfile(id, {
      breed_id,
      pet_name,
      birthday,
      genre,
      local,
      nickname,
      bio,
      photo_profile_path,
    });
    res.redirect("/manimal/profile/select");
  }
);

// Deletar
router.delete("/select/:id", verificarUserLogado, async (req, res) => {
  const { id } = req.params;

  await ProfileController.deleteProfile(id);

  return res.redirect("/manimal/profile/select");
});

//logout

router.get("/logout", function (req, res, next) {
  req.session.destroy();

  res.redirect("/manimal");
});

module.exports = router;