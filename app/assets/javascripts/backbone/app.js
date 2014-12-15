console.log('we got app');

var featuredBeer = new FeaturedBeer();
var meterFetcher = new ChartGauge();


featuredBeer.fetch({
	success: function() {
		featuredBeer.render();
	}
});



meterFetcher.fetch({
	success: function() {
		var value = _(meterFetcher.attributes).value();
		return value;
			var stringGauge = JSON.stringify(value);
			return stringGauge;
				var chartGauge = stringGauge.text();			
			  chartGauge.render();
	}
});

