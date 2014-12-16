console.log('we got trendingBeers');

var TrendingBeers = Backbone.Collection.extend({
	url: '/trending',
	model: TrendingBeer,
	render: function() {
		var trendingBeersView = new TrendingBeersView();
		trendingBeersView.set({collection: trendingBeers});
	}
});