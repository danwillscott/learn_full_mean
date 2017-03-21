/**
 * Created by danielscott on 3/20/17.
 */


app.controller('dashboardController', ['dashboardFactory', '$scope', '$location', function (dashboardFactory, $scope, $location) {
    console.log('Client: Dashboard Controller')

    dashboardFactory.setDashboard(function (dashInit) {
        $scope.dashboardInit = dashInit
    })

}]);



app.controller('customerController', ['customerFactory', '$scope', '$location', function (customerFactory, $scope, $location) {
    console.log('Client: Dashboard Controller');
    $scope.newCustomer = {};

    $scope.allCustomers = function () {
        customerFactory.getCustomers(function (customers) {
            console.log(customers.data);
            $scope.customers = customers.data
        });
    };
    $scope.allCustomers();


    $scope.createCustomer = function () {
        customerFactory.createCustomer($scope.newCustomer, function (data) {
            $scope.newCustomer = {};
            $scope.allCustomers();
        })
    };

    $scope.deleteCustomer = function (customerId) {
        customerFactory.deleteCustomer(customerId, function () {
            $scope.allCustomers();
        });
    }

}]);


// Old Controllers


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
