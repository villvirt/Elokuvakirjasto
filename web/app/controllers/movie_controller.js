MyApp.controller('MovieController', function ($scope, FirebaseService, $location) {
    $scope.movies = FirebaseService.getMovies();
});



