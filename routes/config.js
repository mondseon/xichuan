console.log('------------config.js')
const config = {
	zhenxi:{
		user: 'shhy',                       //SQL Server 的登录名
		password: 'shhy1688!!',               //SQL Server 的登录密码
		server: 'txzxbl01.sjgl580.com',       //SQL Server 的地址
		database: 'eHQ',                 //数据库名称
		port: 1989,                       //端口号，默认为1433
	},
	Default:{
		user: 'sa',                       //SQL Server 的登录名
		password: 'abc@12345',               //SQL Server 的登录密码
		server: '127.0.0.1',              //SQL Server 的地址
		database: 'eHQ',                 //数据库名称
		port: 1433,                       //端口号，默认为1433
	}
}

module.exports = config;