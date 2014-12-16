console.log('we got trendingBeerView');

var TrendingBeerView = Backbone.View.extend({
	tagName: 'div',
	className: 'trending-list',
	model: TrendingBeer,
	initialize: function(){
		this.render();
	},
	template: _.template($("#trending-beer-template").html()),
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
    return this;
	}
});