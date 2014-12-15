console.log('we got trendingBeers');

var TrendingBeerList = Backbone.Collection.extend({
	model: TrendingBeer,
	url: '/trending'
});