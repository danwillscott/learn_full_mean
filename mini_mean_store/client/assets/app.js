/**
 * Created by danielscott on 3/20/17.
 */
let app = angular.module('managerApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'dashboard.html'})
        .when('/products', {templateUrl: 'products.html'})
        .when('/orders', {templateUrl: 'orders.html'})
        .when('/customers', {templateUrl: 'customers.html'})
        .when('/settings', {templateUrl: 'settings.html'})
        .otherwise({redirectTo: '/'})
});