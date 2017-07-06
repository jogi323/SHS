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
    connection.find({$or:[{email:req.body.username},{mobileNumber:req.body.username}]},function(err,data){
        if(err){
            throw err;
        }else if(data[0] != null){
            connection.find({password:req.body.password},function(err,docs){
                if(err){
                    throw err;
                }else if(docs[0] != null){
                    res.json({code:1,msg:'LoggedIn successfully.'});
                }else{
                    res.json({code:2,msg:'Wrong Password.'});
                }
            });
        }else{
            res.json({code:3,msg:'Invalid Username.'});
        }
    });  
}