console.log('we got roundList')

var RoundList = Backbone.Collection.extend({
	model: Round,
	url: "/rounds"
});