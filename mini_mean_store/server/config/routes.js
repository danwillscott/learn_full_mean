/**
 * Created by daniel scott on 3/19/17.
 */
console.log('Server: routes.js loaded');
let index = require('../controllers/index');
let orders = require('../controllers/orders');
let products = require('../controllers/products');
let customers = require('../controllers/customers');


module.exports = function(app){
    // This is the main page it pulls customers products and orders
    app.get('/dashboard', function(req, res) {
        index.show(req, res);
    });
    // Get All Customers
    app.get('/customers', function(req, res) {
        customers.show(req, res);
    });
    // Create A New Customer
    app.post('/customers', function(req, res) {
        customers.create(req, res);
    });
    // Delete A Customer
    app.delete('/customers/:id', function(req, res) {
        customers.delete(req, res);
    });
    // This is for showing all Products
    app.get('/products', function(req, res) {
        products.show(req, res);
    });
    // This is for showing all Orders
    app.get('/orders', function(req, res) {
        orders.show(req, res);
    });


    // OLD ROUTES


    // This is for making a new friend
    app.post('/friends', function(req, res) {
        // friends.create(req, res);
    });
    // This is for updating a friend
    app.put('/friends/:id', function(req, res) {
        // friends.update(req, res);
    });
    // This is for deleting a friend
    app.delete('/friends/:id', function(req, res) {
        // friends.delete(req, res);
    });
};
// this adds route listeners to friends for 5 of the 7 RESTful routes, excluding new and edit.