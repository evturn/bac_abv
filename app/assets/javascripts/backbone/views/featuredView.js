console.log('we got featuredView');

var FeaturedView = Backbone.View.extend({
	template: _.template($("#featured-beer-template").html()),
	initialize: function() {
		this.render();
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
});