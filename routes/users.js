//关于用户资料部分

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log('users...........');
  res.send('已进入routes/users.js');
});



var User = require('../models/users');


// 获取所有用户列表
router.get('/userList', function (req, res) {
    var userList = User.find({"username" : "初七50"}, function (err, data) {
        if (err) throw  err;
        res.send(data)
    });
});

const helper = require('./helper');

router.get('/userList2', function (req, res) {
	// helper.sql('select * from dbo.users where 1 = 1', function (err, result) {
	helper.sql(" exec proc_test '1' ", function (err, result) {
	    if (err) {
	        console.log(err);
	        return;
	    }
		res.send(result)
	    // console.log('data :', result);
	});

    // var userList = User.find({}, function (err, data) {
    //     if (err) throw  err;
    //     res.send(data)
    // });
});


router.post('/userList2', function (req, res) {
	// helper.sql('select * from dbo.users where 1 = 1', function (err, result) {
	helper.sql(" exec proc_test '1' ", function (err, result) {
	    if (err) {
	        console.log(err);
	        return;
	    }
		res.send(result)
	    // console.log('data :', result);
	});
});

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
// 获取所有用户列表
router.post('/userList', function (req, res) {
    var userList = User.find({"username" : "初七50"}, function (err, data) {
        if (err) throw  err;
        res.send(data)
    });
});



router.post('/login', function (req, res) {
	console.log(req)
    var postData = {
        username: req.body.username,
        password: req.body.password
    };
    User.findOne({
        username: postData.username,
        password: postData.password
    }, function (err, data) {
        if(err) throw err;
        if(data){
            res.send('登录成功');
        }else{
            res.send('账号或密码错误')
        }
    } )
});





router.post('/register', function (req, res) {

    // 获取用户提交的信息
    var postData = {
        username: req.body.username,
        password: req.body.password,
        age: req.body.age,
        address: req.body.address
    };
    // 查询是否被注册
    User.findOne({username: postData.username}, function (err, data) {
        if (data) {
            res.send('用户名已被注册');
        } else {
            // 保存到数据库
            User.create(postData, function (err, data) {
                if (err) throw err;
                console.log('注册成功');
                res.redirect('/userList');      // 重定向到所用用户列表
            })
        }
    });
});







module.exports = router;