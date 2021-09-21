const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/ProfileController');
const verificarUserLogado = require('../middlewares/verificarUserLogado');

// Criar
router.get('/create', verificarUserLogado, async (req, res) => {
    const breeds = await ProfileController.listAll();
    res.render('criarPerfil', { breeds });
});
  
router.post('/create', (req, res) => {
    res.redirect('/manimal/inicial');
});
// Criar

// Selecionar
router.get('/select', verificarUserLogado, async (req, res) => {
    const { id } = req.session.user;

    const profiles = await ProfileController.findProfile(id);

    req.session.profiles = profiles;
   
    res.render('selecionarPerfil', { title: "Seleção de perfil", profiles });
});

router.post("/logout", function (req, res, next) {
    const { user } = req.session;
    const { profiles } = req.session;
    delete user, profiles;
  
    res.redirect("/manimal");
});

// Selecionar


module.exports = router;