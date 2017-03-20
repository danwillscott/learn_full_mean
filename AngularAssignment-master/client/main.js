/**
 * Created by daniel scott on 3/17/17.
 */
let app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/index', {
            templateUrl: '/partials/index.html',
            // controller: 'indexController'
        })
        .when('/edit/:id', {
            templateUrl: '/partials/edit.html',
        })
        .when('/new', {
            templateUrl: '/partials/new.html',
            // controller: 'newController',
        })
        .otherwise({
            redirectTo: '/index'
        });
});

app.factory('userFactory',[function () {
    let factory = {};

    factory.getUsers = function () { return allUsers; };

    factory.newUser = function (playerObj) {
        if(playerObj.name > ''){
            playerObj.id = guid();
            allUsers.push(playerObj)
        }
    };

    factory.deleteUser = function (playerObj) {
        allUsers.splice(allUsers.indexOf(playerObj), 1)
    };

    factory.findUser = function (userID) {
        for(let i = 0; i < allUsers.length; i += 1 ){
            if(allUsers[i].id === userID){
                return allUsers[i];
            }
        }
    };

    factory.editUser = function (userID ,edited) {
        let user = factory.findUser(userID.id);
        user.name = edited.name
    };

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    return factory;

}]);

app.controller('userController', ['userFactory',function (userFactory) {
    this.users = userFactory.getUsers();
    this.user = {};

    this.newUser = function (playerObj) {
        userFactory.newUser(playerObj);
        this.user = {}
    };

    this.removeUser = function (playerObj) {
        userFactory.deleteUser(playerObj);
    };

}]);

app.controller('editController', ['userFactory','$routeParams' ,function (userFactory, params) {
    console.log(params.id);
    this.edited = userFactory.findUser(params.id);
    this.editedUser = {};
    this.editUser = function () {
        userFactory.editUser(this.edited, this.editedUser);
        this.editedUser = {};
    }
}]);

app.controller('newController', ['userFactory',function (userFactory) {

    this.newUser = function (user) {
        userFactory.newUser(user);
    }
}]);















let allUsers =[
    {
        "id": "58cc8ba924b7d06212401f7f",
        "name": "Yvette Miller"
    },
    {
        "id": "58cc8ba927dfa88fb2329bfe",
        "name": "Conway Lindsey"
    },
    {
        "id": "58cc8ba9a3a580f0c8b5a240",
        "name": "Patsy Rodgers"
    },
    {
        "id": "58cc8ba9033180dd8df12954",
        "name": "Norman Hardin"
    },
    {
        "id": "58cc8ba94703fddecaadccca",
        "name": "Constance Ashley"
    },
    {
        "id": "58cc8ba98a6cddebd4e03f88",
        "name": "Jarvis Roth"
    },
    {
        "id": "58cc8ba9f735d53c01d96158",
        "name": "Mccray Stevens"
    },
    {
        "id": "58cc8ba944b8c22b797361fa",
        "name": "Jennings Collins"
    },
    {
        "id": "58cc8ba928ab9d11ee757286",
        "name": "Simone Petersen"
    },
    {
        "id": "58cc8ba98dafdaa6eb40f631",
        "name": "Brewer Crawford"
    },
    {
        "id": "58cc8ba976abb9452fae2b77",
        "name": "Jeri Wilkerson"
    },
    {
        "id": "58cc8ba93621bd19a51d4555",
        "name": "Fernandez Barrera"
    },
    {
        "id": "58cc8ba9d9f2a960a404feca",
        "name": "Griffith Owens"
    },
    {
        "id": "58cc8ba971ba35ed6d81cafb",
        "name": "Spencer Williams"
    },
    {
        "id": "58cc8ba91b0a6a01a8dea444",
        "name": "Sheppard Silva"
    },
    {
        "id": "58cc8ba92fe86b5d9caa4c37",
        "name": "Jill Osborn"
    },
    {
        "id": "58cc8ba9477971a8daf8a1c4",
        "name": "Lucy Stafford"
    },
    {
        "id": "58cc8ba92f49e9461d42e89d",
        "name": "Holly Johns"
    },
    {
        "id": "58cc8ba918f823be7556c763",
        "name": "Lea Richardson"
    },
    {
        "id": "58cc8ba9f33c3fa6c4d4ee6a",
        "name": "Wall Nielsen"
    }
];

