const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.get('/create', async (req, res) => {
    const breeds = await profileController.listAll();
    res.render('criarPerfil', { breeds });
});
  
router.post('/create', (req, res) => {
    res.redirect('/manimal/inicial');
});

module.exports = router;