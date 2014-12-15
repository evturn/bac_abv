console.log('we got a chartGauge');

var ChartGauge = Backbone.Model.extend({
	initialize: function() {
		this.render
	},
	url: '/gauge',
	render: function() {
		hitTheSwitch();
	},
});