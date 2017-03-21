/**
 * Created by danielscott on 3/20/17.
 */

app.factory('dashboardFactory', ['$http', function ($http) {
    console.log('Client: Dashboard Factory');
    let factory = {};

    factory.setDashboard = function (returnCallBack) {
        console.log('Client: Setting Dashboard');
        $http.get('/dashboard').then(function (dashboardData) {
            console.log(dashboardData.data);
            return returnCallBack(dashboardData);
        })
    };

    return factory;
}]);


app.factory('customerFactory', ['$http', function ($http) {
    console.log('Client: Customer Factory');
    let factory = {};

    factory.getCustomers = function (returnCallBack) {
        console.log('Client: Get Customers Method');
        $http.get('/customers').then(function (customerData) {
            returnCallBack(customerData);
        });
    };

    factory.createCustomer = function (newCustomer,returnCallBack) {
        console.log('Client: Create Customer Method');
        $http.post('/customers', newCustomer).then(function (data) {
            return returnCallBack(data);
        });
    };

    factory.deleteCustomer = function (customerId, returnCallBack) {
        $http.delete(`/customers/${customerId}`).then(function () {
            console.log(customerId);
            returnCallBack();
        })
    };

    return factory;
}]);


// Old Factories


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

