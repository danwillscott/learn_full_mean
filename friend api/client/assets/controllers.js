/**
 * Created by danielscott on 3/19/17.
 */

app.controller('userManagerController', ['userFactory','$scope', '$location', function (userFactory, $scope, $location) {
    console.log('userManagerController Active');
    userFactory.getUsers(function (data) {
        $scope.dbUsers = data
    });

    $scope.removeUser = function (user) {
        // console.log('remove user', user);
        userFactory.deleteUser(user, function () {
            $location.path('/')
        })
    }
}]);




app.controller('newUserController', ['userFactory', '$scope', function (userFactory, $scope) {
    console.log('newUserController Active');
    $scope.newFriend = {};
    $scope.createFriend = function () {
        userFactory.newUser($scope.newFriend, function () {
            
        });
        console.log($scope.newFriend);
    }


}]);

app.controller('showUserController', ['userFactory','$scope','$routeParams', function (userFactory, $scope, params) {
    console.log('showUserController Active');
    userFactory.getUser(params.id, function (user) {
        $scope.user = user.result
    });
}]);

app.controller('editUserController', ['userFactory','$scope','$routeParams', function (userFactory, $scope, params) {
    console.log('editUserController Active');
    userFactory.getUser(params.id, function (user) {
        $scope.user = user.result
    });
    $scope.editedUser = {};
    $scope.editUser = function () {
        userFactory.editUser($scope.editedUser, function (user) {
            $scope.user = user;
        });
    }

}]);
