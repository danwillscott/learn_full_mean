/**
 * Created by danielscott on 3/19/17.
 */
let mongoose = require('mongoose');
let Friend = mongoose.model('Friend');
console.log('friends controller');
module.exports = {
    index: function(req,res){
        console.log('Friends Controller Index Used');

        // for(let i = 0; i < hardCodedUsers.length; i += 1){
        //     Friend.create(hardCodedUsers[i], function (err, result) {
        //         if(err){
        //             // res.json({result: result, error: result.errors})
        //         }else{
        //             // res.json({result: result, error: false});
        //         }
        //     });
        // }
        // This finds all "Friends" in the mongo DB and returns them with or without Errors
        // Ensure Errors are checked before attempting to use results
        Friend.find({}, function (err, results) {
            if(err){
                res.json({result: err, error: 'Error Finding Users'})
            } else {
                res.json({result: results, error: false});
            }
        });



    },

    create: function(req,res){
        console.log('Friends Controller Create Used');
        console.log(req.body);

        Friend.create(req.body, function (err, result) {
            if(err){
                res.json({result: result, error: result.errors})
            }else{
                res.json({result: result, error: false});
            }
        });
    },

    update: function(req,res){
        console.log('Friends Controller Update Used');

        Friend.findOne({_id: req.params.id}, function (err, userToUpdate) {
            if(err){
                console.log('Error in finding this user');
                res.json({result: err, error: 'User Not Found'});
            //    Return errors here!
            } else {
                console.log(`User Found ${userToUpdate} Now Updating`);
                userToUpdate.firstName = req.body.firstName;
                userToUpdate.lastName = req.body.lastName;
                userToUpdate.dateOfBirth = req.body.dateOfBirth;
                userToUpdate.save(function (err, updatedFriend) {
                    if(err){
                        console.log(`Error in updating user with errors ${updatedFriend.errors}`)
                    //    Do Something With The Errors
                        res.json({result: updatedFriend, error: updatedFriend.errors})
                    } else {
                        console.log(`Update Complete User Data: ${updatedFriend}`);
                        // Ensure Checking for errors
                        res.json({result: updatedFriend, error: false})
                    }
                })
            }
        });
    },

    delete: function(req,res){
        console.log('Friends Controller Delete Used');

        Friend.remove({_id: req.params.id}, function (err) {
            if(err){
                res.json({error:err})
            } else {
                res.json({error: false})
            }
        });
        res.json({placeholder:'delete'});
    },

    show: function(req,res){
        console.log('Friends Controller Show Used');
        Friend.findOne({_id: req.params.id}, function (err, results) {
            if(err){
                console.log('error finding user');
                res.json({result: err, error: 'User Not Found'})
            } else {
                console.log('User found');
                res.json({result: results, error: false})
            }
        });
    }
};




let hardCodedUsers = [
    {
        "firstName": "Lee ",
        "lastName": "Hopper's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "firstName": "Herrera ",
        "lastName": "Ballard's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "firstName": "Rosie ",
        "lastName": "Underwood's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "firstName": "Marylou ",
        "lastName": "Sherman's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "firstName": "Bryan ",
        "lastName": "Harrison's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "firstName": "Joyner ",
        "lastName": "Schmidt's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "firstName": "Noel ",
        "lastName": "Holcomb's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "firstName": "Fern ",
        "lastName": "Sweeney's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "firstName": "Sanders ",
        "lastName": "Cabrera's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "firstName": "Becker ",
        "lastName": "Clemons's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "firstName": "Shawna ",
        "lastName": "Nielsen's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "firstName": "Britt ",
        "lastName": "Landry's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "firstName": "Alyssa ",
        "lastName": "Anthony's ",
        "dob": "Tuesday, January 14, 2014 6:42 AM"
    },
    {
        "firstName": "Lane ",
        "lastName": "Cantrell's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "firstName": "Welch ",
        "lastName": "Forbes's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "firstName": "Hoover ",
        "lastName": "Sawyer's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "firstName": "Harding ",
        "lastName": "Mcleod's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "firstName": "Everett ",
        "lastName": "Hubbard's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "firstName": "Moore ",
        "lastName": "Molina's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "firstName": "Susie ",
        "lastName": "Potter's ",
        "dob": "2017-03-20T00:58:51.812Z"
    }
];