var express = require('express');
var router = express.Router();

router.get('/inicial', function(req, res, next) {
    res.render('inicial');
  });
  
  module.exports = router;
