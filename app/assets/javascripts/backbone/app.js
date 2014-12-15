console.log('we got app');

var featuredBeer = new FeaturedBeer();
var chartGauge = new ChartGauge();



featuredBeer.fetch({
	success: function() {
		featuredBeer.render();
	}
});

chartGauge.fetch({
	success: function(data) {
		console.log(data);
		chartGauge.render();
	}
});
