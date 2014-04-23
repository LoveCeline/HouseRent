
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('frontViews/Index', { title: '租房管理' });
};
exports.hindIndex = function(req, res){
    res.render('hindViews/hindIndex', { title: '租房管理' });
};