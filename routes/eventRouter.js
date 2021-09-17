const express = require('express');
const router = express.Router();
const EventController = require('../controllers/eventController');

router.get('/create', async (req, res) => {
    const profile = await EventController.buscarProfile(1)
    //trazer o profile pela session lá do login
    res.render('criarEventos', { profile });
});

router.post('/create',  async (req, res) => {
    const { name,
            beginning_date,
            ends_date,
            hour,
            finish_hour,
            description,
            local
          } = req.body;
    
    let profile_id = 1;
 //trazer o profile pela session lá do login
  
    const { photo_event_path, photo_id } = await EventController.importarPhoto("photo_event");
  //implementar a importação da photo pelo multer

    await EventController.criarUmEvento(
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
            );
  
    res.status(201).redirect(`/list/:${profile.id}`);
  });
  
  router.get('/list/:profile_id',  async(req, res) => {
    
    const { profile_id } = req.params;
    const eventosCriadosPorProfile = await EventController.listarEventosPorId(profile_id);
    
    
    res.render('eventosCriados', {title: 'Eventos Criados', profile, eventosCriadosPorProfile });
  });

  router.get('/list',  async (req, res) => {
  
    const todosEventos = await EventController.buscarTodosEventos();
  //trazer o profile da session la do login
    res.render('eventosDisponiveis', {title: 'Eventos Disponiveis', profile, todosEventos});
  
  
  });

module.exports = router;