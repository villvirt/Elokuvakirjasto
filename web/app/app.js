var MyApp = angular.module('MyApp', ['ngRoute']);

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
            .otherwise({
                redirectTo: '/movies'
            });
});