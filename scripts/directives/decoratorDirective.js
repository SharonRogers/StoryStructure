
app.directive("storyDecorator", function() {
	return {
		restrict: "E",
		scope: {
			story: "="
		},
		templateUrl: "decoratorDirective.html"
	}
});

app.directive("storyClickSelect", function() {
	return {
		link: function(scope, el, attrs) {
			el.on("click", function() {
				scope.story.selected = !scope.story.selected;
				scope.$apply();
			})
		}
	}
});