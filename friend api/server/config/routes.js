/**
 * Created by danielscott on 3/19/17.
 */
console.log('Server: routes.js loaded');
let friends = require('../controllers/friends');
module.exports = function(app){
    // This is the main page it pulls all users
    app.get('/friends', function(req, res) {
        friends.index(req, res);
    });
    // This is for showing a single friend
    app.get('/friends/:id', function(req, res) {
        friends.show(req, res);
    });
    // This is for making a new friend
    app.post('/friends', function(req, res) {
        friends.create(req, res);
    });
    // This is for updating a friend
    app.put('/friends/:id', function(req, res) {
        friends.update(req, res);
    });
    // This is for deleting a friend
    app.delete('/friends/:id', function(req, res) {
        friends.delete(req, res);
    });
};
// this adds route listeners to friends for 5 of the 7 RESTful routes, excluding new and edit.