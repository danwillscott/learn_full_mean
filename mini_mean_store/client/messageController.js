/**
 * Created by danielscott on 3/23/17.
 */
app.controller('messageController', ['messageFactory', '$scope', '$location', '$cookies', function (messageFactory, $scope, $location, $cookies) {
    $scope.cookies = $cookies;
    $scope.sessionForm = {};
    $scope.allCustomers = function () {
        messageFactory.getCustomers(function(customers) {
            console.log(customers.data.result);
            $scope.customers = customers.data
        });
    };
    $scope.allCustomers();
    $scope.setSession = function(name){

        $cookies.put('user', name);
        $scope.name = '';
        $scope.sessionForm = {};
    };


    console.log($cookies.get('user'));
}]);

