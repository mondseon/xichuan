//关于用户资料部分
console.log('------------users2.js')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log('users2...........');
  res.send('已进入routes/users2.js');
});



// var User = require('../models/users');


// 获取所有用户列表

const helper = require('./helper');

  // router.custid='Default';

router.post('/Ts_AppBannerImg', function (req, res) {
	// console.log(req.body)
	// console.log('--------------')
	// var postData = {
	//     custid: req.body.custid,
	//     userid: req.body.userid,
	//     code: req.body.code,
	// };
	// if(router.custid){
	// 	router.custid=postData.custid;	
	// }
	// if (!ValldCode(postData.code)){res.send('验证码有误') ; return false} 
	// helper.sql('select * from dbo.users where 1 = 1', function (err, result) {
	helper.sql(" SELECT APPID,FORDER,TITLE,URL FROM Ts_AppBannerImg ", function (err, result) {
	    if (err) {
			console.log('+++++++++++++++++++++++')
	        console.log(err);
	        return false;
	    }
		res.send(result)
	    console.log('data :', result);
	});

});











module.exports = router;