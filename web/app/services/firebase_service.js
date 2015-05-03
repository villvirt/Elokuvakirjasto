MyApp.service('FirebaseService', function ($firebase) {
    var firebaseRef = new Firebase('https://incandescent-heat-7379.firebaseIO.com/movies');
    var sync = $firebase(firebaseRef);
    var movies = sync.$asArray();

    this.getMovies = function () {
        return movies;
    }

    this.addMovie = function (movie) {
        movies.$add(movie);
    }
});