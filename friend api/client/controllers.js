/**
 * Created by danielscott on 3/19/17.
 */

app.controller('userManagerController', ['userFactory','$scope', '$location', function (userFactory, $scope, $location) {
    console.log('Client: userManagerController Active');
    userFactory.getUsers(function (data) {
        $scope.dbUsers = data
    });
    $scope.removeUser = function (user) {
        console.log('remove user', user);
        userFactory.deleteUser(user, function () {
            userFactory.getUsers(function (data) {
                $scope.dbUsers = data
            });
        });
    }
}]);




app.controller('newUserController', ['userFactory', '$scope', function (userFactory, $scope) {
    console.log('Client: newUserController Active');
    $scope.newFriend = {};
    $scope.createFriend = function () {
        userFactory.newUser($scope.newFriend, function () {
            $scope.newFriend = {};
        });
    }
}]);

app.controller('showUserController', ['userFactory','$scope','$routeParams', function (userFactory, $scope, params) {
    console.log('Client: showUserController Active');
    userFactory.getUser(params.id, function (user) {
        $scope.user = user.result
    });
}]);

app.controller('editUserController', ['userFactory','$scope','$routeParams', function (userFactory, $scope, params) {
    console.log('Client: editUserController Active');
    userFactory.getUser(params.id, function (user) {
        $scope.user = user.result;
        $scope.editedUser = {};
        $scope.editedUser._id = $scope.user._id
    });


    $scope.editUser = function () {
        if($scope.editedUser.firstName > '' && $scope.editedUser.lastName && $scope.editedUser.dob){
            userFactory.editUser($scope.editedUser, function () {
                userFactory.getUser(params.id, function (user) {
                    $scope.user = user.result;
                    $scope.editedUser = {};
                    $scope.editedUser._id = $scope.user._id
                    $scope.badData = ''
                });
            });
        } else {
            $scope.badData = 'You Need To Enter All Fields'
        }
    };
}]);
