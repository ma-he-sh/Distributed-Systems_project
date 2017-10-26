var express = require('express');
var router = express.Router();
var os = require('os');

/* GET home page. */
router.get('/', function(req, res, next) {

  //console.log(os.cpus());
  var cpu = os.cpus();
  var mem = os.totalmem();

  res.render('index', { title: 'Express', cpu: cpu, mem: mem });
});

router.get('/progress', function(req, res, next){
  res.render('progress', { title: 'progress'});
});

router.get('/represent', function(req, res, next){
  res.render('represent', {title: 'data representation'});
})

module.exports = router;
