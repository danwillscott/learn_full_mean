/**
 * Created by danielscott on 3/19/17.
 */
let app = angular.module('managerApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'main.html'})
        .when('/new', {templateUrl: 'new.html'})
        .when('/edit/:id', {templateUrl: 'edit.html'})
        .when('/show/:id', {templateUrl: 'show.html'})
        .otherwise({redirectTo: '/'})
});