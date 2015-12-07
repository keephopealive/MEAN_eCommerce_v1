mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect('mongodb://172.31.17.85:27017/MEAN_eCommerceSchema');

var models_path = __dirname + '/../models';

fs.readdirSync(models_path).forEach(function(file) {
	if (file.indexOf('.js') > 0) {
		require(models_path + '/' + file);
	}
})
