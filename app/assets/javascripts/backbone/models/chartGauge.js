console.log('we got chartGauge');

var ChartGauge = Backbone.Model.extend({
	url: '/gauge',
	render: function() {
		var view = new ChartGaugeView({model: this});
		return this;
	}
});