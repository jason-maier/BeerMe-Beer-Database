var app = angular.module('beerme', [
  'beers',
  'ngRoute'
])

app.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/beerme', {
      templateUrl: 'public/beers.html',
    })
    .when('/random', {
      templateUrl: 'public/randombeer.html'
    })
    .otherwise({
      redirectTo: '/',
    })
})
