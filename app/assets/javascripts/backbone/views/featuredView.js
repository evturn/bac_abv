console.log('we got featuredView');

var FeaturedBeerView = Backbone.View.extend({
	tagName: 'li',
	className: 'featured-beer',
	initialize: function() {
		this.render();
	},
	template: _.template($("#featured-beer-template").html()),
	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});