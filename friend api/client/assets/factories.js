/**
 * Created by danielscott on 3/19/17.
 */

app.factory('userFactory', ['$http', function ($http) {
    console.log('Connected to Factory');
    let factory = {};
    factory.users = hardCodedUsers; // REMOVE AFTER DB USED

    factory.getUsers = function (returnCallBack) {
        $http.get('/friends').then(function (users_data) {
            return returnCallBack(users_data.data);
        })
    };

    factory.allUsers = function (finishedCallBack) {
        return finishedCallBack(factory.users);
    };

    factory.findUserIndex = function (user, finishedCallBack) {

        console.log('In Factory for find user index');
        let userIndex;
        // This is hardcoded date only REMOVE FOR PRODUCTION
        for(let i = 0; i < hardCodedUsers.length; i += 1){
            if(user === hardCodedUsers[i]){
                userIndex = i;
            }
        }
        return finishedCallBack(userIndex)
    };

    factory.getUser = function (userId, finishedCallBack) {
        console.log('In Factory Get User Method');
        $http.get(`/friends/${userId}`).then(function (users_data) {
            return finishedCallBack(users_data.data);
        })
    };

    factory.deleteUser = function (user, finishedCallBack) {
        console.log('In Factory Delete User');
        // REMOVE FOR DB USE
        factory.findUserIndex(user, function (data) {
            hardCodedUsers.splice(data, 1);
        });
        return finishedCallBack();
    };

    factory.editUser = function (user, finishedCallBack) {
        console.log('in factory For Edit User ', user);
        // Add DB Call
        return finishedCallBack(user);

    };
    
    factory.newUser = function (newUser, finishedCallBack) {
        if(newUser.firstName > '' && newUser.lastName > ''&& newUser.dob)
        $http.create('/friends').then(function(user_data){
            console.log(user_data);
            return finishedCallBack(user_data);
        });

    };

    return factory;
}]);







// THIS IS EXAMPLE FACTORY

//
// app.factory('friendsFactory', ['$http', function($http) {
//     console.log('Friends Factory In Use');
//     let factory = {};
//     factory.index = function() {
//         //call this method if you want to update or set the friends variable
//
//
//         $http.get('/friends').then(function(returned_data){
//
//             console.log(returned_data.data);
//             callback(friends);
//         });
//     };
//     factory.show = function() {
//         // Your code here
//     };
//     factory.create = function(newfriend, callback) {
//         $http.post('/friends', newfriend).then(function(returned_data){
//             console.log(returned_data.data);
//             if (typeof(callback) == 'function'){
//                 callback(returned_data.data);
//             }
//         });
//     };
//     factory.update = function(id, callback) {
//         $http.put(/*ROUTE*/).then(function(returned_data) {
//             console.log(returned_data.data);
//             if (typeof(callback) == 'function'){
//                 callback(returned_data.data);
//             }
//         })
//     };
//     factory.delete = function() {
//         // Your code here
//     };
//     return factory;
// }]);
//
//
// app.controller('newController', ['$scope','friendsFactory', function($scope, friendsFactory) {
//     let index = function () {
//         friendsFactory.index(function(data) {
//             console.log(data);
//             $scope.friends = data;
//         })
//     };
//     index();
//     $scope.create = function() {
//         friendsFactory.create($scope.newFriend, function(data) {
//             // If we needed to display an updated list of friends on this page, we would have to do this;
//             $scope.friends = data;
//         });
//     }
// }]);
//
//
// // Possible Edit Controller that
// app.controller('editController', ['$scope','friendsFactory', '$routeParams', function($scope, friendsFactory, $routeParams) {
//     friendsFactory.show($routeParams.id, function(returnedData){
//         $scope.friend = returnedData;
//         console.log($scope.friend);
//     });
//     $scope.update(/*What goes here?*/);
//     /*
//      OUR $scope.update function goes here <-- $scope because we need to access this method
//      with ng-submit or ng-click (from the form in the previous assignment).  Want to see
//      all of the friends when we get back including the updated on??
//      See Index in the previous controller.
//      */
// }]);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


let hardCodedUsers = [
    {
        "id": "58ce382de09b02f9abbfb09b",
        "firstName": "Lee ",
        "lastName": "Hopper's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d7d6af0f57e5ef673",
        "firstName": "Herrera ",
        "lastName": "Ballard's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d0baa91a5534f4e75",
        "firstName": "Rosie ",
        "lastName": "Underwood's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382dba0a6799ee804f1e",
        "firstName": "Marylou ",
        "lastName": "Sherman's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d1317c84483a80bb8",
        "firstName": "Bryan ",
        "lastName": "Harrison's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d11740946f7633700",
        "firstName": "Joyner ",
        "lastName": "Schmidt's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d6f48396d97bfa5df",
        "firstName": "Noel ",
        "lastName": "Holcomb's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382de6704f7ce2fa24f0",
        "firstName": "Fern ",
        "lastName": "Sweeney's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382daeef0f7098a1c6b6",
        "firstName": "Sanders ",
        "lastName": "Cabrera's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d39c5a920b23cefad",
        "firstName": "Becker ",
        "lastName": "Clemons's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382de6ff4370c1554ff9",
        "firstName": "Shawna ",
        "lastName": "Nielsen's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d22ee972cd39a0525",
        "firstName": "Britt ",
        "lastName": "Landry's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d794540b36db17a1b",
        "firstName": "Alyssa ",
        "lastName": "Anthony's ",
        "dob": "Tuesday, January 14, 2014 6:42 AM"
    },
    {
        "id": "58ce382dab345c9fb39cfdf7",
        "firstName": "Lane ",
        "lastName": "Cantrell's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d4dba4886e59df378",
        "firstName": "Welch ",
        "lastName": "Forbes's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382dfe375c4be1ef0d2f",
        "firstName": "Hoover ",
        "lastName": "Sawyer's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382dfd873e26c3a22081",
        "firstName": "Harding ",
        "lastName": "Mcleod's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d71bfe4db048dd7c2",
        "firstName": "Everett ",
        "lastName": "Hubbard's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d27efa65bdd25d9e5",
        "firstName": "Moore ",
        "lastName": "Molina's ",
        "dob": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d713adb32769bedb0",
        "firstName": "Susie ",
        "lastName": "Potter's ",
        "dob": "2017-03-20T00:58:51.812Z"
    }
];