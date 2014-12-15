console.log('we got a chartGaugeView');

var ChartGaugeView = Backbone.View.extend({
	tagName: 'div',
	className: 'chart-gauge',
	initialize: function() {
		this.render();
	},
	template: _.template($("#chart-gauge-template").html()),
	render: function() {
		var chartGauge = new ChartGauge();
		this.$el.(this.template(this.model.toJSON()));
		$('#chart-gauge').prepend(this.$el);
	}
	

});