console.log('we got featuredBeerView');

var FeaturedBeerView = Backbone.View.extend({
	tagName: 'div',
	className: 'featured-beer',
	initialize: function() {
		this.render();
	},
	template: _.template($("#featured-beer-template").html()),
	render: function() {
		this.$el.html(this.template(featuredBeer.toJSON()));
		return this;
	}
});

