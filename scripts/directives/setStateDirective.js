app.directive('setState', function() {
	uiStateSetter(setStateService);

	uiStateType = '@'
	uiStateValue = '@'

	element.on('click', function() {
		setStateService.newState('key', newValue)
	})
