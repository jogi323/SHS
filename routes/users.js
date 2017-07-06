var express = require('express');
var router = express.Router();
var controllers = require('../controllers/controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST Action for users Creation
router.post('/register',function(req,res){
  //res.send('respond with a resource1');
  controllers.register(req,res); 
});
// POST Action for Login
router.post('/login',function(req,res){
  //res.send('respond with a resource1');
  controllers.login(req,res);
  console.log('login')
})
module.exports = router;
