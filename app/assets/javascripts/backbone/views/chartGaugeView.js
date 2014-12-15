console.log('we got chartGaugeView');

var ChartGaugeView = Backbone.View.extend({
	tagName: 'div',
	className: 'chart-gauge',
	template: _.template($("#chart-gauge-template").html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		$('#chart-gauge').prepend(this.$el);
		return this;
	},
});