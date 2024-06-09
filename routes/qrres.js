var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('qrgen', { title: 'QR Code Generator' });
});

router.post('/', function(req, res, next) {
  res.render('qrres', { url: req.body.url });
});

module.exports = router;
