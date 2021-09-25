const express = require('express');
const router = express.Router();
const RegisterController = require('../controllers/RegisterController');

router.get('/', (req, res) => {
  res.render('cadastro', { title: "Cadastro" });
});
  
router.post('/', async (req, res) => {
  const { name, phone, email, password, passwordConfirm } = req.body;

  await RegisterController.createUser({ name, phone, email, password, passwordConfirm });

  res.status(201).redirect('/manimal');
});

module.exports = router;