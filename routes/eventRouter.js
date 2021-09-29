const express = require('express');
const router = express.Router();
const EventController = require('../controllers/eventController');
const multer = require('multer');
const multerConfig = require('../config/multer')
const verificarProfileLogado = require("../middlewares/verificarProfileLogado")

router.get('/criar', verificarProfileLogado, async (req, res) => {
    const { profile } = req.session;
    res.render('criarEventos', { profile });
});

router.post('/criar',  multer(multerConfig).single('photo'), async(req, res) => {
    const { name,
            beginning_date,
            ends_date,
            hour,
            finish_hour,
            description,
            local
          } = req.body;
    
    const { profile } = req.session;
    const profile_id = profile.id;
    
    const{path:photo_event_path = '', key:photo_id = ''} = req.file;

    await EventController.criarUmEvento({
            profile_id,
            name,
            beginning_date,
            ends_date,
            hour,
            finish_hour,
            description,
            local,
            photo_event_path,
            photo_id
    });
  
  res.redirect(`/manimal/event/list/${profile_id}`);
  });
  
  router.get('/list/:id', verificarProfileLogado, async(req, res) => {
    const { profile } = req.session;
    const { id } = req.params;
    const profile_id = profile.id;
    const eventosCriadosPorProfile = await EventController.listarEventosPorId(profile_id);
    
    
  res.render('eventosCriados', {title: 'Eventos Criados', profile, eventosCriadosPorProfile });
  });

  router.get('/list', verificarProfileLogado, async (req, res) => {
    const { profile } = req.session;
    const todosEventos = await EventController.buscarTodosEventos();
    
  res.render('eventosDisponiveis', {title: 'Eventos Disponiveis', profile, todosEventos});
  
  
  });
  

module.exports = router;