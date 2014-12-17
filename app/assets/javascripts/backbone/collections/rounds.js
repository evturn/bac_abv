console.log('we got rounds')

var Rounds = Backbone.Collection.extend({
	model: Round,
	url: "/rounds"
});