const express = require('express');
const router = express.Router();
const multer = require('multer');
const multerConfig = require('../config/multer')
const postController = require('../controllers/postController')
const profileController = require('../controllers/profileController');
const LoginController = require('../controllers/LoginController');
const verificarUserLogado = require('../middlewares/verificarUserLogado');

/** Post* */
router.get('/inicial/:id', verificarUserLogado, async function(req, res, next) {
  const { profiles } = req.session;
  const { id } = req.params;

  let profile = [];

  for (let i=0; i <= profiles.length-1; i++) {
    if (profiles[i].id == Number(id)) {
      profile = profiles[i];
    };
  };  

  req.session.profile = profile;
  const profile_id = profile.id;
  const posts = await postController.showPosts(profile_id);
  const searchProfile = await profileController.findUserProfile(profile_id);
  res.render('inicial',{posts, searchProfile})
});


router.post('/posts/', multer(multerConfig).single('photo'), async function(req, res, next) {
  const {profile} = req.session
  const{location:photo_post_path = '', key:photo_id = ''} = req.file
  //const { key:photo_post_path = '' } = req.file;
  const {post} = req.body
  const profile_id = profile.id;
  await postController.criarPost({profile_id,post,photo_post_path, photo_id});
  return res.redirect(`/manimal/inicial/${profile_id}`)
});

router.get('/search', async(req,res,next)=>{
  const {profile} = req.session
  const {key} = req.query;
  const profile_id = profile.id;
  const buscar = await profileController.findAnimalByName({key});
  const searchProfile = await profileController.findUserProfile(profile_id);
  return res.render('pesquisar', {buscar, searchProfile});
})

/**Album*/
router.get('/album', (req, res) => {
  res.render('album');
});
router.get('/album/newalbum', (req, res) => {
  res.render('newAlbum');
});

/** Rotas Alan* */
router.get('/perfilUser/:id', async (req, res) => {
  const {profile} = req.session
  const profile_id = profile.id;
  const searchProfile = await profileController.findUserProfile(profile_id);
  console.log(searchProfile)
  const posts = await postController.showPosts(profile_id);
  res.render('perfilUser', {searchProfile, posts,});
});

router.get('/perfilVisitante/:id',async (req, res) => {
  const { id } = req.params;
  const {profile} = req.session
  const profile_id = profile.id;
  const searchProfile = await profileController.findUserProfile(profile_id);
  const searchProfileVisitante = await profileController.findVisitante(id);
  const posts = await postController.showPostsVisitante(id);

  res.render('perfilVisitante', {searchProfile, searchProfileVisitante, posts});
});

/** Rotas André* */

// Login
router.get('/', (req, res) => {
  res.render('login', { title: "Login" });
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const { password: notUsedPassword, ...user } = await LoginController.logUser({
    email,
    password,
  });

  req.session.user = user;

  res.redirect('/manimal/profile/select');
});
// login
router.get('/ajuda', (req, res) => {
  res.render('ajudaLogin');
});

router.post('/ajuda', (req, res) => {
  res.redirect('/manimal/ajuda/confirmacao');
});

router.get('/ajuda/confirmacao', (req, res) => {
  res.render('confirmaAjudaLogin');
});

module.exports = router;
