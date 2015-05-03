MyApp.controller('AddMovieController', function ($scope, FirebaseService, $location) {
    $scope.movies = FirebaseService.getMovies();
    $scope.name = '';
    $scope.director = '';
    $scope.release = '';
    $scope.description = '';

    $scope.addMovie = function () {
        if ($scope.name.length!==0 && $scope.director.length!==0 && $scope.release.length!==0 && $scope.description.length!==0){
            FirebaseService.addMovie({
                name: $scope.name,
                director: $scope.director,
                release: $scope.release,
                description: $scope.description
            });
            $location.path('/movies');
        }
    }
});