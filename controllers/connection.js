var mongoose = require('mongoose');

var connection = mongoose.connect('mongodb://myapplication:myapplication@ds149122.mlab.com:49122/myapplication', { useMongoClient: true });

var userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    mobileNumber:Number
});

var user = mongoose.model('usersdata',userSchema);

module.exports = user;

