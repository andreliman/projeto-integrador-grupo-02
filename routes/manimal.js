const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerConfig = require("../config/multer");
const postController = require("../controllers/postController");
const profileController = require("../controllers/profileController");
const LoginController = require("../controllers/LoginController");
const verificarUserLogado = require("../middlewares/verificarUserLogado");
const friendsController = require("../controllers/friendsController");
const albumsController = require("../controllers/albumsController");
/** Post* */
router.get(
  "/inicial/:id",
  verificarUserLogado,
  async function (req, res, next) {
    const { profiles } = req.session;
    const { id } = req.params;

    let profile = [];

    for (let i = 0; i <= profiles.length - 1; i++) {
      if (profiles[i].id == Number(id)) {
        profile = profiles[i];
      }
    }

    req.session.profile = profile;
    const profile_id = profile.id;
    const posts = await postController.showPosts(profile_id);
    const searchProfile = await profileController.findUserProfile(profile_id);
    res.render("inicial", { posts, searchProfile });
  }
);

router.post(
  "/posts/",
  verificarUserLogado,
  multer(multerConfig).single("photo"),
  async function (req, res, next) {
    const { profile } = req.session;
    // const{location:photo_post_path = '', key:photo_id = ''} = req.file
    const { key: photo_post_path = "" } = req.file;
    const { post } = req.body;
    const profile_id = profile.id;
    await postController.criarPost({ profile_id, post, photo_post_path });
    return res.redirect(`/manimal/inicial/${profile_id}`);
  }
);

router.get("/search", async (req, res, next) => {
  const { profile } = req.session;
  const { key } = req.query;
  const profile_id = profile.id;
  const buscar = await profileController.findAnimalByName({ key });
  const searchProfile = await profileController.findUserProfile(profile_id);
  return res.render("pesquisar", { buscar, searchProfile });
});

/**Album*/
router.get("/album/:id", async (req, res) => {
  const { profile } = req.session;
  const profile_id = profile.id;
  const showAlbums = await albumsController.showAlbums(profile_id);
  const searchProfile = await profileController.findUserProfile(profile_id);
  res.render("album", { searchProfile, showAlbums });
});
router.get("/album/detalhe/:id", async (req, res) => {
  const { profile } = req.session;
  const profile_id = profile.id;
  const { id } = req.params;
  const detalheAlbum = await albumsController.detalheAlbum(id);
  const searchProfile = await profileController.findUserProfile(profile_id);
  res.render("detalheAlbum", { searchProfile, detalheAlbum });
});

/** Rotas Alan* */
router.get("/perfilUser/:id", async (req, res) => {
  const { profile } = req.session;
  const profile_id = profile.id;
  const searchProfile = await profileController.findUserProfile(profile_id);
  const seguidores = await friendsController.countSeguidores(profile_id);
  const seguindo = await friendsController.countSeguindo(profile_id);
  const amigos = await friendsController.showFriends(profile_id);
  const posts = await postController.showPostsUser(profile_id);
  const countPosts = await postController.countPosts(profile_id);
  res.render("perfilUser", {
    searchProfile,
    posts,
    countPosts,
    seguidores,
    seguindo,
    amigos,
  });
});

router.get("/perfilVisitante/:id", async (req, res) => {
  const { id } = req.params;
  const { profile } = req.session;
  const profile_id = profile.id;
  const searchProfile = await profileController.findUserProfile(profile_id);
  const searchProfileVisitante = await profileController.findVisitante(id);
  const amigos = await friendsController.showFriendsVisitante(id);
  const seguidores = await friendsController.countSeguidoresVisitante(id);
  const seguindo = await friendsController.countSeguindoVisitante(id);
  const posts = await postController.showPostsVisitante(id);
  const countPosts = await postController.countPosts(id);

  res.render("perfilVisitante", {
    searchProfile,
    searchProfileVisitante,
    posts,
    countPosts,
    seguidores,
    seguindo,
    amigos,
  });
});
router.post("/perfilVisitante/:id/add/", async (req, res) => {
  const { id } = req.params;
  const friend_id = id;
  const { profile } = req.session;
  const profile_id = profile.id;
  const seguindo = "seguindo";
  await friendsController.addFriend(friend_id, profile_id, seguindo);
  return res.redirect(`/manimal/inicial/${profile_id}`);
});

/** Rotas André* */

// Login
router.get("/", (req, res) => {
  res.render("login", { title: "Login" });
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const { password: notUsedPassword, ...user } = await LoginController.logUser({
      email,
      password,
    });
  
    req.session.user = user;
  
    res.status(201).redirect("/manimal/profile/select");
  } catch (error) {

    const message = "Falha ao logar. Por favor, tente novamente!";
    
    return res.status(400).render("error", { error, message });
  }  
});
// login
router.get("/ajuda", (req, res) => {
  res.render("ajudaLogin");
});

router.post("/ajuda", (req, res) => {
  res.redirect("/manimal/ajuda/confirmacao");
});

router.get("/ajuda/confirmacao", (req, res) => {
  res.render("confirmaAjudaLogin");
});

module.exports = router;
