console.log('we got trendingBeerList');

var TrendingBeerList = Backbone.Collection.extend({
	url: '/trending',
	model: TrendingBeer,
});