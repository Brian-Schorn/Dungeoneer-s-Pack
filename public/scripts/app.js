var dungeonPackApp = angular.module('dungeonPack', ['ngRoute']);

dungeonPackApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  $routeProvider
    .when('/navList', {
      templateUrl: '/public/views/templates/navList.html',
      controller: 'navListController',
      controllerAs: 'navList',
      // resolve: {
      // _: function ($location,$http) {
      //       $http.get('/loginStatus').then(function(res){
      //         console.log('res.data, logged in =',res.data);
      //         if(res.data){
      //           console.log('user is logged in');
      //           return;
      //         }else {
      //           console.log('user is not logged in');
      //           //send them to the login view
      //           // return false;
      //           return $location.path('/');
      //         }
      //       })
      //     }
      //   }
    })
    .when('/login', {
      templateUrl: '/public/views/templates/login.html',
      controller: 'AuthController',
      controllerAs: 'auth',
    })
    .when('/roll', {
      templateUrl: '/public/views/templates/rollDice.html',
      controller: 'rollController',
      controllerAs: 'roll',
    })
    .when('/char', {
      templateUrl: '/public/views/templates/charSheet.html',
      controller: 'charController',
      controllerAs: 'char',
    })
    .when('/spell', {
      templateUrl: '/public/views/templates/spellBook.html',
      controller: 'spellController',
      controllerAs: 'spell',
    })
    .otherwise({
      redirectTo: '/navList',

    });
    $locationProvider.html5Mode(true);
},
])
