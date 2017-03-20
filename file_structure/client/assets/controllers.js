/**
 * Created by danielscott on 3/19/17.
 */

app.controller('userManagerController', ['userFactory','$scope', '$location', function (userFactory, $scope, $location) {
    userFactory.allUsers(function (users) {
        $scope.users = users;
    });

    $scope.removeUser = function (user) {
        // console.log('remove user', user);
        userFactory.deleteUser(user, function () {
            $location.path('/')
        })
    }
}]);




app.controller('newUserController', ['userFactory', '$scope','$routeParams', function (userFactory, $scope, params) {
    console.log(params)
}]);

app.controller('showUserController', ['userFactory','$scope','$routeParams', function (userFactory, $scope, params) {
    $scope.user = userFactory.getUser(params.id, function (user) {
        return user;
    });

}]);

app.controller('editUserController', ['userFactory','$scope','$routeParams', function (userFactory, $scope, params) {
    $scope.user = userFactory.getUser(params.id, function (user) {
        return user;
    });
    $scope.user.dateOfBirth = new Date().toDateString();
    $scope.editedUser = {};
    $scope.editUser = function () {
        userFactory.editUser($scope.editedUser, function (user) {
            $scope.user = user;
        });
    }

}]);
