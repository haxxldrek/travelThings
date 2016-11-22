(function() {
    angular
            .module('app')
            .config(function($routeProvider, $locationProvider){
                $locationProvider.html5Mode(true);
                $routeProvider
                    .when('/', {
                        templateUrl: 'app.html'
                    })
                    .when('/request-form', {
                    templateUrl: 'request-form.html'
                })
                    .when('/reqister', {
                    templateUrl: 'reqister.html'
                })
                    .otherwise('/')
    })
})();
