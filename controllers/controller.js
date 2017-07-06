var connection = require('./connection');
//Register controller
exports.register = function(req,res){
    var newUser = new connection({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        mobileNumber:req.body.mobile
    });

    connection.find({ mobileNumber:req.body.mobile},function(err,data){
        console.log(data);
        if(err){
            throw err
        }else if(data[0] == null){
                newUser.save(function(err,data){
                    //console.log(data);
                    if(err){
                        throw err;
                    }else{
                        res.json({code:1,msg:'success'});
                    }
                });
            }else{
                 res.json({code:2,msg:'User Already exist.'});
            }
        
    })
};

//Login Controller
exports.login = function(req,res){
    var usernameType = typeof(req.body.username);
    //console.log(usernameType  == 'string');
    if(usernameType  == 'string'){
        console.log('String')
    }else if(usernameType == 'number'){
        console.log('Number');
        connection.find({$and:[{mobileNumber:req.body.username},{password:req.body.password}]},function(err,data){
            if(err){
                throw err;
            }else{
                if(data[0] != null){
                    res.json({code:1,msg:'Successfully LOggedIn.'}); 
                }else{
                    res.json({code:2,msg:'Invalid Credentials.'});
                }
            }
        });
    }
  
}