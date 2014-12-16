console.log('we got beers');

var Beers = Backbone.Collection.extend({
	model: Beer,
	url: '/beers'
});