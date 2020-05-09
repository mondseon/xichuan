var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 声明一个数据集 对象
var articlesSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    content: {
        type: String
    },
    id: {
		type: Date,
		default : Date.now()
	},
    username: String
});
// 将数据模型暴露出去
module.exports = mongoose.model('articles', articlesSchema);