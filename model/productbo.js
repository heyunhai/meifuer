/**
 * 产品bo
 * Created by duanying on 2016/4/9.
 */
var productSchema = mongoose.Schema({
    "name":String,//系列名称
    "num": Number,//系列中的作品数
    "url":String,//封面图片路径
    "creat_at":Date//<时间>
});

var product = mongoose.model('products', productSchema);

module.exports = product;