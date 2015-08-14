app.controller('breakdownCtrl', function($scope, dataService, $location) {

// This function puts the data on to the scope to be used by the ng-repeat to give a list of all stories in the data

	$scope.getStories = function() {
		$scope.stories = dataService.getStories();
	};

	$scope.getStories();
	$scope.story = dataService.getStory();
	

// this function sets up pulling the index of the story on the home page and displaying that one story on the other view and puts the information on the scope and puts the data in an alternate view of each part being listed out in the structureBreakdown.html

	$scope.setBreakdown = function(index) {
		$location.path('/breakdown');
		dataService.setStory($scope.stories[index]);
	};
	

	// $scope.story.expo = {
	// 	selected: false
	// }

// this is the function for the button that will go from the structure breakdown back to the list of stories

	$scope.goBack = function() {
		$location.path('/stories');
	}

	$scope.goTest = function() {
		$location.path('/test');
	}
	
    $scope.hiker = {};
    $scope.hiker.one = false;
    $scope.hiker.two = false;
    $scope.hiker.three = false;
    $scope.hiker.four = false;
    $scope.hiker.five = false;

    $scope.toggle = function(index) {
     	switch(index) {
     		case 1:
     			$scope.hiker.one = !$scope.hiker.one;
     			$scope.hiker.two = false;
     			$scope.hiker.three = false;
     			$scope.hiker.four = false;
     			$scope.hiker.five = false;
     			break;
     		case 2: 
     			$scope.hiker.one = false;
     			$scope.hiker.two = !$scope.hiker.two;
     			$scope.hiker.three = false;
     			$scope.hiker.four = false;
     			$scope.hiker.five = false;
     			break;
     		case 3:
     			$scope.hiker.one = false;
     			$scope.hiker.two = false;
     			$scope.hiker.three = !$scope.hiker.three;
     			$scope.hiker.four = false;
     			$scope.hiker.five = false;
     			break;
     		case 4:
     			$scope.hiker.one = false;
     			$scope.hiker.two = false;
     			$scope.hiker.three = false;
     			$scope.hiker.four = !$scope.hiker.four;
     			$scope.hiker.five = false;
     			break;
     		case 5:
     			$scope.hiker.one = false;
     			$scope.hiker.two = false;
     			$scope.hiker.three = false;
     			$scope.hiker.four = false;
     			$scope.hiker.five = !$scope.hiker.five;
     			break;
     	}
    };



});