console.log('we got round roundList')

var RoundList = Backbone.Collection.extend({
	model: Round,
	url: "/rounds"
});