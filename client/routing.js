app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
            function($stateProvider,$urlRouterProvider, $httpProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('/', {
    url: '/',
    templateUrl: '/client/views/home.html'
  });

   $httpProvider.interceptors.push('authIntercepter');

}]);

