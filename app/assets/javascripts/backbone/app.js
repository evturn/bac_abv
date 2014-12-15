console.log('we got app');

var featuredBeer = new FeaturedBeer();
var chartGaugeView = new ChartGaugeView();

chartGaugeView.render();

featuredBeer.fetch({
	success: function() {
		featuredBeer.render();
	}
});
