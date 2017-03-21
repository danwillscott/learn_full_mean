/**
 * Created by danielscott on 3/19/17.
 */

console.log('friends model');
let mongoose = require('mongoose');

let FriendSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: Date
});

let Friend = mongoose.model('Friend', FriendSchema);