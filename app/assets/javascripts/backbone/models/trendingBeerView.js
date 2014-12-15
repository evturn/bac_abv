console.log('we got trendingBeerView');

var TrendingBeerView = Backbone.View.Extend({
	tagName: 'div',
	className: 'trending-beer',
	initialize: function(){
		this.render();
	},
	template: _.template($("#trending-beer-template").html()),
	render: function() {
		this.$el.html(this.template(trendingBeer.toJSON()));
		$('#trending-beer').prepend(this.$el);
		return this;
	}
});