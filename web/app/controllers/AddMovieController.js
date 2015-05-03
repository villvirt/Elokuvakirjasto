MyApp.controller('AddMovieController', function ($scope, FirebaseService) {
    $scope.addMovie = function(){
        console.log("addmoviecontroller");
            FirebaseService.addMovie({
                name: $scope.name,
                director: $scope.director,
                release: $scope.release,
                description: $scope.description
            });
  }
});