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

/**Rotas Neto**/
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

/**Rotas Alan**/
router.get('/perfilUser', function(req,res,next){
  res.render('perfilUser');
})

router.get('/perfilVisitante', function(req,res,next){
  res.render('perfilVisitante');
})

/**Rotas André**/
router.get('/cadastro', function(req,res,next){
  res.render('cadastro');
});

router.post('/cadastro', function(req, res, next) {
  res.redirect('/manimals/login');
});  

router.get('/login', function(req,res,next){
  res.render('login');
});

router.post('/login', function(req,res,next){
  res.redirect('/manimals/inicial');
});

router.get('/login/ajuda', function(req,res,next){
  res.render('ajudaLogin');
});

router.post('/login/ajuda', function(req,res,next){
  res.redirect('/manimals/login/ajuda/confirmacao');
});

router.get('/login/ajuda/confirmacao', function(req,res,next){
  res.render('confirmaAjudaLogin');
});

module.exports = router;