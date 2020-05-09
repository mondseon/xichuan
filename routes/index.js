var express = require('express');
// var app = express();
var router = express.Router();

var User = require('../models/users');



/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('login', { title: 'Express' });
  res.send('这里是溪川首页');
});



// var User = require('../models/users');


// router.get('/login', function (req, res) {
//     res.render('login');
// });
// router.get('/register', function (req, res) {
//     res.render('register');
// });





module.exports = router;