app.controller('testCtrl', function($scope, dataService, $location) {

// This function puts the data on to the scope 
	$scope.getStories = function() {
		console.log('getStories is running in Ctrl');
		$scope.stories = dataService.getStories();
		console.log('Story Data from Ctrl', $scope.stories)
	}

	$scope.getStories();


	$scope.story = dataService.getStory();
	console.log($scope.story)

});