var express = require('express');
var router = express.Router();

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
module.exports = router;