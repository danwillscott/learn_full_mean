/**
 * Created by danielscott on 3/19/17.
 */
app.factory('userFactory', ['$http', function ($http) {
    let factory = {};
    factory.users = hardCodedUsers;
    factory.allUsers = function (finishedCallBack) {
        return finishedCallBack(factory.users);
    };

    factory.findUserIndex = function (user, finishedCallBack) {
        let userIndex;

        for(let i = 0; i < hardCodedUsers.length; i += 1){
            if(user === hardCodedUsers[i]){
                userIndex = i;
            }
        }
        return finishedCallBack(userIndex)
    };

    factory.getUser = function (userId, finishedCallBack) {
            let user;
            for(let i = 0; i < hardCodedUsers.length; i += 1){
                if(userId === hardCodedUsers[i].id){
                    user = hardCodedUsers[i];
                }
            }
        return finishedCallBack(user)
    };

    factory.deleteUser = function (user, finishedCallBack) {
        factory.findUserIndex(user, function (data) {
            hardCodedUsers.splice(data, 1);
        });
        return finishedCallBack();
    };

    factory.editUser = function (user, finishedCallBack) {
        console.log('in factory and user is ', user);

        return finishedCallBack(user);

    }


    return factory;
}]);






























let hardCodedUsers = [
    {
        "id": "58ce382de09b02f9abbfb09b",
        "firstName": "Lee ",
        "lastName": "Hopper's ",
        "dateOfBirth": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d7d6af0f57e5ef673",
        "firstName": "Herrera ",
        "lastName": "Ballard's ",
        "dateOfBirth": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d0baa91a5534f4e75",
        "firstName": "Rosie ",
        "lastName": "Underwood's ",
        "dateOfBirth": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382dba0a6799ee804f1e",
        "firstName": "Marylou ",
        "lastName": "Sherman's ",
        "dateOfBirth": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d1317c84483a80bb8",
        "firstName": "Bryan ",
        "lastName": "Harrison's ",
        "dateOfBirth": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d11740946f7633700",
        "firstName": "Joyner ",
        "lastName": "Schmidt's ",
        "dateOfBirth": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d6f48396d97bfa5df",
        "firstName": "Noel ",
        "lastName": "Holcomb's ",
        "dateOfBirth": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382de6704f7ce2fa24f0",
        "firstName": "Fern ",
        "lastName": "Sweeney's ",
        "dateOfBirth": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382daeef0f7098a1c6b6",
        "firstName": "Sanders ",
        "lastName": "Cabrera's ",
        "dateOfBirth": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d39c5a920b23cefad",
        "firstName": "Becker ",
        "lastName": "Clemons's ",
        "dateOfBirth": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382de6ff4370c1554ff9",
        "firstName": "Shawna ",
        "lastName": "Nielsen's ",
        "dateOfBirth": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d22ee972cd39a0525",
        "firstName": "Britt ",
        "lastName": "Landry's ",
        "dateOfBirth": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d794540b36db17a1b",
        "firstName": "Alyssa ",
        "lastName": "Anthony's ",
        "dateOfBirth": "Tuesday, January 14, 2014 6:42 AM"
    },
    {
        "id": "58ce382dab345c9fb39cfdf7",
        "firstName": "Lane ",
        "lastName": "Cantrell's ",
        "dateOfBirth": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d4dba4886e59df378",
        "firstName": "Welch ",
        "lastName": "Forbes's ",
        "dateOfBirth": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382dfe375c4be1ef0d2f",
        "firstName": "Hoover ",
        "lastName": "Sawyer's ",
        "dateOfBirth": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382dfd873e26c3a22081",
        "firstName": "Harding ",
        "lastName": "Mcleod's ",
        "dateOfBirth": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d71bfe4db048dd7c2",
        "firstName": "Everett ",
        "lastName": "Hubbard's ",
        "dateOfBirth": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d27efa65bdd25d9e5",
        "firstName": "Moore ",
        "lastName": "Molina's ",
        "dateOfBirth": "2017-03-20T00:58:51.812Z"
    },
    {
        "id": "58ce382d713adb32769bedb0",
        "firstName": "Susie ",
        "lastName": "Potter's ",
        "dateOfBirth": "2017-03-20T00:58:51.812Z"
    }
];