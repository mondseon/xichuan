var express = require('express');
var router = express.Router();

var custid = 'zhenxi';
const mssql = require('mssql');
const config = require('./config');
var configDB = config[custid]
console.log(configDB)
console.log(configDB.user)
console.log('------------mobile.js')
//方法对象
const units = {
	sql: function(sql, callback) {
		///连接池
		new mssql.ConnectionPool(units.config())
			.connect()
			.then(pool => {
				let ps = new mssql.PreparedStatement(pool);
				ps.prepare(sql, err => {
					if (err) {
						console.log(err);
						return;
					}
					ps.execute('', (err, result) => {
						if (err) {
							console.log(err);
							return;
						}
						ps.unprepare(err => {
							if (err) {
								console.log(err);
								callback(err, null);
								return;
							}
							callback(err, result);
						});
					});
				});
			}).catch(err => {
				console.log("Database Connection Failed! Bad Config:", err);
			});
	},
	/*
	 * 默认config对象
	 * @type {{user: string, password: string, server: string, database: string, pool: {min: number, idleTimeoutMillis: number}}}
	 */
	config: function() {
		return {
			user: configDB.user, //SQL Server 的登录名
			password: configDB.password, //SQL Server 的登录密码
			server: configDB.server, //SQL Server 的地址
			database: configDB.database, //数据库名称
			port: configDB.port, //端口号，默认为1433
			pool: {
				min: 0, //连接池最小连接数，默认0
				max: 10, //连接池最大连接数，默认10
				idleTimeoutMillis: 3000 //设置关闭未使用连接的时间，单位ms默认30000
			},
			/*--其他属性--*/
			// connectionTimeout：             //连接timeout，单位ms 默认 15000
			// requestTimeout：                //请求timeout，单位ms默认15000
			// parseJSON：                     //将json数据集转化成json obj 
		}
	}
}

// const helper = require('./helper');



function ValldCode(code) {
	return code == '0e4a3b38'
}

// router.custid='Default';

router.get('/', function(req, res, next) {
	console.log('mobile.js...........');
	res.send('已进入routes/mobile.js');
});
router.post('/', function(req, res, next) {
	console.log('mobile.js...........post');
	res.send('已进入routes/mobile.js-post');
});

router.get('/Ts_AppBannerImg', function(req, res) {
	res.send('get_Ts_AppBannerImg')
});
router.post('/Ts_AppBannerImg', function(req, res) {
	custid = 'Default';
	// configDB.user= 'shhy'
	configDB = config[custid]
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
	units.sql(" SELECT APPID,FORDER,TITLE,URL FROM Ts_AppBannerImg ", function(err, result) {
		if (err) {
			console.log('+++++++++++++++++++++++')
			console.log(err);
			return false;
		}
		res.send(result)
		console.log('data :', result);
	});

});

router.post('/Ts_AppBannerImg2', function(req, res) {
	custid = 'zhenxi';
	configDB = config[custid]
	units.sql(" SELECT APPID,FORDER,TITLE,URL FROM Ts_AppBannerImg ", function(err, result) {
		if (err) {
			console.log(err);
			return false;
		}
		res.send(result)
		console.log('data :', result);
	});

});


module.exports = router;
