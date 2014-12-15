console.log('we got app');

var featuredBeer = new FeaturedBeer();
var meterFetcher = new ChartGauge();


featuredBeer.fetch({
	success: function() {
		featuredBeer.render();
	}
});

function parseObject(data) {
	var value = _(data.attributes).value();
	return value;
		var stringGauge = JSON.stringify(value);
		return stringGauge;
			var chartGauge = stringGauge.toJSON();			
			return chartGauge();
};

meterFetcher.fetch({
	success: function(data) {
		parseObject(data);
		this.render();
	}
});

