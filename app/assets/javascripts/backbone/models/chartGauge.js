console.log('we got chartGauge');

var ChartGauge = Backbone.Model.extend({
	defaults: {
		d3: ''
	},
	url: '/gauge'
});