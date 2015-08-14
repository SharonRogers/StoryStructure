app.service('dataService', function() {
	
	var stories = [
	{
		title: 'Bill and the Cow'
		, expo: 'Bill started up the hill.'
		, riseAction: 'He saw a cow in the distance standing on the path.'
		, climax: 'As he got closer, the cow had not moved. He couldn\'t get around it so he decided the only way was to climb over him. When he got on the cow, the cow started running down the hill.'
		, fallAction: 'when the cow stopped, Bill was right where he had begun his adventure so he started back up the hill.'
		, resolution: 'When he came to the spot where the cow had been, Bill said to himself, "I guess cows come and go but journeys never end." as he reached the top of the hill.'
	},
	{
		title: 'Don\'t Cry Over Non-spilled Milk'
		, expo:'Susie needed some milk so she decided to go to the store.'
		, riseAction: 'She drove to the store, went inside, opened the door to the milk case and reached for a gallon of milk.'
		, climax: 'Just then the lights went out in the entire store and a hand grabbed Suzie\'s hand.'
		, fallAction: 'Suzie screamed louder than she thought she even could as her hand was held fast.' 
		, resolution: 'Just then the lights came back on and standing beside Suzie was another woman who had reached in the other case at the same time and instead of getting milk had grabbed Suzie\'s hand. Suzie laughed as she realized that the reason her scream had been so loud was becuse the othr woman had screamed at the same time. They let go of each other, grabbed their milk and left both realizing that there as no need for tears because it\'s no use crying over no milk spilled!'
	}
	]

	// This puts the data on the scope

	this.getStories = function() {
		return stories;
	}

	var story = '';
	this.setStory = function(newstory){
		story = newstory;
	}

	this.getStory = function(){
		return story;
	}
});
