console.log('we got trendingBeerList');

var TrendingBeerList = Backbone.Collection.extend({
	model: TrendingBeer,
	url: '/trending'
});