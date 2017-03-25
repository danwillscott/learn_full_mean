/**
 * Created by danielscott on 3/24/17.
 */
app.factory('messageFactory', ['$http', function ($http) {
    let factory = {};
    console.log('in message Factory');
    factory.getCustomers = function (returnCallBack) {
        if(typeof (returnCallBack) === 'function'){
            console.log('function');
            console.log('Client: Get Customers Method');
            $http.get('/customers').then(function (customerData) {
                return returnCallBack(customerData);
            });
        } else {
            console.log('not a function yet')
        }

    };
    factory.getCustomers();
    return factory;
}]);