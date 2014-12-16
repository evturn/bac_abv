console.log('we got app');

var featuredBeer = new FeaturedBeer();
var trendingBeer = new TrendingBeer();
var meterFetcher = new ChartGauge();
var trendingBeers = new TrendingBeers();


featuredBeer.fetch({
	success: function() {
		featuredBeer.render();
	}
});

trendingBeer.fetch({
	success: function() {
		trendingBeer.render();
		trendingBeers.set(trendingBeer);
	}
});

