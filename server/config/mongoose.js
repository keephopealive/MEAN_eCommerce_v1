mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect('mongodb://localhost/MEAN_eCommerceSchema');

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: { type: String, trim: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

mongoose.model('User', UserSchema);
UserSchema.path('first_name').required(true, "First Name is required");







// var models_path = __dirname + '/../models';

// fs.readdirSync(models_path).forEach(function(file) {
// 	if (file.indexOf('.js') > 0) {
// 		require(models_path + '/' + file);
// 	}
// })