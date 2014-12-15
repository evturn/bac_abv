console.log('we got app');

var featuredBeer = new FeaturedBeer();
var meterFetcher = new ChartGauge();


featuredBeer.fetch({
	success: function() {
		featuredBeer.render();
	}
});

