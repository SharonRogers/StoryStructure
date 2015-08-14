// This directive manipulates what is in the view by connecting the view and the directive html which can then be repeated anywhere on the pages 

app.directive('breakdownDirective', function() {
	return {
		controller: 'breakdownCtrl',
		templateUrl: 'views/breakdownDirective.html',
		scope: {
			story: '='
		}
	}
});