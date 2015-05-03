var MyApp = angular.module('MyApp', ['ngRoute', 'firebase']);

MyApp.config(function ($routeProvider) {
    $routeProvider
            .when('/movies', {
                controller: 'MovieController',
                templateUrl: 'app/views/movies.html'
            })
            .when('/movies/new', {
                controller: 'AddMovieController',
                templateUrl: 'app/views/addmovie.html'
            })
            .when('/', {
                controller: 'MovieController',
                templateUrl: 'app/views/movies.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});