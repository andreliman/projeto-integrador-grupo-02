const express = require('express');
const router = express.Router();
const multer = require('multer');
const multerConfig = require('../config/multer')
const postController = require('../controllers/postController')
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

  const posts = await postController.showPosts();
  res.render('inicial',{posts})
});
router.get('/posts', async function(req, res, next) {
  res.render('post')
});

router.post('/posts', multer(multerConfig).single('file'), async function(req, res, next) {
  const user = req.session;
  const{location:photo_post_path, key:photo_id} = req.file
  const {post} = req.body
  
 await postController.criarPost({user,post,photo_post_path,photo_id});
  
  return res.redirect('/inicial')
});

/**Album*/
router.get('/album', (req, res) => {
  res.render('album');
});
router.get('/album/newalbum', (req, res) => {
  res.render('newAlbum');
});
/**Perfil */
router.get('/editar/perfil', (req, res) => {
  res.render('editarPerfil');
});

/** Rotas Neto* */
router.get('/eventos/criar', (req, res) => {
  res.render('criarEventos');
});

router.post('/eventos/criar', (req, res) => {
  res.redirect('/manimal/eventos/criados');
});

router.get('/eventos/criados', (req, res) => {
  res.render('eventosCriados');
});

router.get('/eventos/aceitos', (req, res) => {
  res.render('eventosAceitos');
});

router.get('/eventos', (req, res) => {
  res.render('eventosDisponiveis');
});

/** Rotas Alan* */
router.get('/perfilUser', (req, res) => {
  res.render('perfilUser');
});

router.get('/perfilVisitante', (req, res) => {
  res.render('perfilVisitante');
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
