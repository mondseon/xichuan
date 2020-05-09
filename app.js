var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');



var app = express();
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

//--------------------------------------------------------------

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.use(express.static('public'));

app.engine("html",ejs.__express);
app.set("view engine", "html");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//-------------接口地址---------------

var indexRouter = require('./routes/index');
 var usersRouter = require('./routes/users');
// var usersRouter2 = require('./routes/users2');
// var mobileRouter = require('./routes/mobile');
// var articlesRouter = require('./routes/articles');

// console.log(usersRouter)
// console.log(mobileRouter2)


app.use('/', indexRouter);//首页
 app.use('/users', usersRouter);//用户部分
// app.use('/users2', usersRouter2);//用户部分
// app.use('/mobile', mobileRouter);//报表App
// app.use('/articles', articlesRouter);//文章部分



//----------------------------





// catch 404 and forward to error handler 捕获404并转发到错误处理程序
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler 错误处理程序
app.use(function(err, req, res, next) {
  // set locals, only providing error in development 设置局部变量，只提供开发错误
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




//------------------------------连接数据库
var mongoose = require('mongoose');            

var url ='mongodb://localhost/runoob'
mongoose.connect(url,{
	useNewUrlParser: true ,
	useUnifiedTopology: true 
	},function(err,db){
})     //连接本地数据库blog 
// mongoose.connect('mongodb://username:password@host:port/database?options...');
// var db = mongoose.connection;

// // 连接成功
// db.on('open', function(){
//     console.log('MongoDB 连接成功');
// });
// // 连接失败
// db.on('error', function(){
//     console.log('MongoDB 连接失败');
// });



// app.js 

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));




//------------------------------
// const config = {
//     user: 'sa',
//     password: 'abc@12345',
//     server: '127.0.0.1', 
//     database: 'eHQ',
// 	port:'1433',
//     options: {
//         encrypt: true //使用windows azure，需要设置次配置。
//     }
// }

// var sql = require('mssql');
// //连接方式："mssql://用户名:密码@ip地址:1433(默认端口号)/数据库名称"
// sql.connect("mssql://sa:abc@12345@127.0.0.1:1433/eHQ").then(function() {
//     // Query
// 	const request = new sql.Request()
// 	request.stream = true //开启streaming
// 	// request.query('exec proc_test') //或者执行request.execute(procedure)
// 	// request.execute("exec proc_test '' ")
// 	request.on('recordset', columns => {
// 		console.log('11111')
		
// 	    //每次查询会触发一次 recordset事件，返回结果集
// 	})
// 	request.on('row', row => {
// 		console.log(row)
// 	    //每个结果集会出发row事件，返回row信息
// 	})
// 	request.on('error', err => {
// 		console.log('3333')
// 		console.log(err)
// 	    //监听error事件，可能被触发多次
// 	})
// 	request.on('done', result => {
// 		console.log('4444')
// 		console.log(result)
// 	    //最后触发
// 	})
// }).catch(function(err) {
//     console.log(err);
// })










module.exports = app;
