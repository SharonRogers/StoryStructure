app.controller('mainCtrl', function($scope, dataService, $location) {

// This function puts the data on to the scope 
	$scope.getStories = function() {
		// console.log('getStories is running in Ctrl');
		$scope.stories = dataService.getStories();
		// console.log('Story Data from Ctrl', $scope.stories)
	}

	$scope.getStories();

	$scope.setComplete = function() {
		$location.path('/stories');
	};

	$scope.goHome = function() {
		$location.path('/home');
	}


});