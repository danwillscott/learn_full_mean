/**
 * Created by danielscott on 3/19/17.
 */

app.factory('userFactory', ['$http', function ($http) {
    console.log('Client: Connected to Factory');
    let factory = {};

    factory.getUsers = function (returnCallBack) {
        console.log('Client: Factory Get All Users');
        $http.get('/friends').then(function (users_data) {
            return returnCallBack(users_data.data);
        })
    };


    factory.getUser = function (userId, finishedCallBack) {
        console.log('Client: Factory Get One User Method');
        $http.get(`/friends/${userId}`).then(function (users_data) {
            return finishedCallBack(users_data.data);
        })
    };

    factory.deleteUser = function (user, finishedCallBack) {
        console.log('Client: Factory Delete User');
        $http.delete(`/friends/${user._id}`);
        return finishedCallBack();
    };

    factory.editUser = function (user, finishedCallBack) {
        console.log('Client: Factory Edit User ', user);
        $http.put(`/friends/${user._id}`, user);
        return finishedCallBack();

    };
    
    factory.newUser = function (newUser, finishedCallBack) {
        if(newUser.firstName > '' && newUser.lastName > ''&& newUser.dob){
            $http.post('/friends', newUser).then(function(user_data){
                console.log(user_data);
                return finishedCallBack(user_data);
            });
        } else {
            console.log('User Data Lacking', newUser )
        }


    };

    return factory;
}]);



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