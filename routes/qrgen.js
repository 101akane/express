var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('qrgen', { title: 'QR Code Generator' });
});

module.exports = router;
