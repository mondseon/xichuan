//文章部分
var express = require('express');
var router = express.Router();

console.log('------------articles.js')

router.get('/', function(req, res, next) {
	console.log('articles...........');
  res.send('已进入routes/articles.js');
});

var articles = require('../models/articles');

// 文章
router.post('/articles', function (req, res) {
    var articlesList = articles.find({}, function (err, data) {
        if (err) throw  err;
        res.send(data)
    });
});

// 新增文章
router.post('/addArticles', function (req, res) {
    var articlesData = {
		title:req.body.title,
        username: req.body.username,
        id: Date.now(),
        content: req.body.content
    };
	articles.create(articlesData, function (err, data) {
	    if (err) throw err;
	    console.log('新增成功');
		res.send('新增成功')
	})
	
});


module.exports = router;