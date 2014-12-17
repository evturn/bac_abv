console.log('we got featuredBeerView');

var FeaturedBeerView = Backbone.View.extend({
	tagName: 'div',
	className: 'row twelve columns featured-beer',
	collection: TrendingBeers,
	initialize: function() {
		this.render();
	},
	template: _.template($("#featured-beer-template").html()),
	render: function() {
		this.$el.html(this.template(featuredBeer.toJSON()));
		$('#featured-beer').append(this.$el);
		return this;
	}
});

