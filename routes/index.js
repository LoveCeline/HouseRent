
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('hindIndex', { title: '租房管理' });
};