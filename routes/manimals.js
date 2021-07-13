const express = require('express');
const router = express.Router();

router.get('/inicial', function(req, res, next) {
    res.render('inicial');
  });
  
  module.exports = router;
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

router.post('/eventos/criar', function(req,res,next){
  res.redirect('/manimals/eventos/criados');
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
