const express = require('express');
const router = express.Router();
const multer = require('multer');
const multerConfig = require('../config/multer')
const postController = require('../controllers/postController')

/** Post* */
router.get('/inicial', async function(req, res, next) {
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
router.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

router.post('/cadastro', (req, res) => {
  res.redirect('/manimal/profile/create');
});

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  res.redirect('/manimal/inicial');
});

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
