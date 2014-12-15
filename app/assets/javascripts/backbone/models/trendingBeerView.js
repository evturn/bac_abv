console.log('we got trendingBeerView');

var TrendingBeerView = Backbone.View.extend({
	tagName: 'div',
	className: 'trending-beer',
	model: TrendingBeer,
	initialize: function(){
		this.render();
	},
	template: _.template($("#trending-beer-template").html()),
	render: function() {
		this.$el.html(this.template(trendingBeer.toJSON()));
		return this;
	}
});