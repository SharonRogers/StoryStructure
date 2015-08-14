var app = angular.module('storyStructure', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'mainCtrl'
		})
		.when('/stories', {
			templateUrl: 'views/completeStories.html',
			controller: 'breakdownCtrl'
		})
		.when('/breakdown', {
			templateUrl: 'views/structureBreakdown.html',
			controller: 'breakdownCtrl'
		})
		.when('/test', {
			templateUrl: 'views/testStructure.html',
			controller: 'testCtrl'
		})
		.otherwise({
			redirectTo: '/home'
		})
	})