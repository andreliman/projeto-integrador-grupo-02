const express = require('express');
const router = express.Router();

/**Rotas Ed**/
router.get('/inicial', function(req, res, next) {
    res.render('inicial');
  });
router.get('/album', function(req,res,next){
  res.render('album');
})
router.get('/album/newalbum', function(req,res,next){
  res.render('newAlbum');
})
router.get('/editar/perfil', function(req,res,next){
  res.render('editarPerfil');
})

router.get('/eventos/criar', function(req,res,next){
  res.render('criarEventos');
})

router.get('/eventos/criados', function(req,res,next){
  res.render('eventosCriados');
})

router.get('/eventos/aceitos', function(req,res,next){
  res.render('eventosAceitos');
})

router.get('/eventos', function(req,res,next){
  res.render('eventosDisponiveis');
})
router.get('/perfilUser', function(req,res,next){
  res.render('perfilUser');
})

router.get('/perfilVisitante', function(req,res,next){
  res.render('perfilVisitante');
})

module.exports = router;