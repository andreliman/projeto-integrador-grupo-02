const express = require('express');
const router = express.Router();

/** Rotas Ed* */
router.get('/inicial', (req, res) => {
  res.render('inicial');
});
router.get('/album', (req, res) => {
  res.render('album');
});
router.get('/album/newalbum', (req, res) => {
  res.render('newAlbum');
});
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
