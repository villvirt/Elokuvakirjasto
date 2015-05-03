var MyApp = angular.module('MyApp', ['firebase']);

MyApp.service('FirebaseService', function ($firebase) {
    var firebaseRef = new Firebase('https://incandescent-heat-7379.firebaseIO.com/movies');
    var sync = $firebase(firebaseRef);
    var movies = sync.$asArray();

    this.getMovies = function () {
        return movies;
    }

    this.addMovies = function (movie) {
        console.log("asdasd");
        movies.$add(movie);
    }
});