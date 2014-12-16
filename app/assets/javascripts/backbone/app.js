console.log('we got app');

var featuredBeer = new FeaturedBeer();
var trendingBeer = new TrendingBeer();
var trendingBeers = new TrendingBeers();
var meterFetcher = new ChartGauge();

$(function(){

	featuredBeer.fetch({
		success: function() {
			featuredBeer.render();
		}
	});

	trendingBeers.fetch({
		success: function() {
			var trendingBeersView = new TrendingBeersView({collection: this});
		}
	});
});


