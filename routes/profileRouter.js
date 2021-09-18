const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/ProfileController');

router.get('/select', async (req, res) => {
    res.render('selecionarPerfil');
});

router.get('/create', async (req, res) => {
    const breeds = await ProfileController.listAll();
    res.render('criarPerfil', { breeds });
});
  
router.post('/create', (req, res) => {
    res.redirect('/manimal/inicial');
});

module.exports = router;