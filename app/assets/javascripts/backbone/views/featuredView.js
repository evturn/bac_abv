console.log('we got featuredView');

var FeaturedView = Backbone.View.extend({
	template: _.template($("#featured-beer-template").html()),
	initialize: function() {
		this.render();
	}
});