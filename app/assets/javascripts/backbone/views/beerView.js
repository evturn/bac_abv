console.log('we got beerView');

var BeerView.js = Backbone.View.extend({
	template: _.template($("#found-beer-template").html()),
	initialize: function() {
		this.listenTo('#beer-search', 'submit', this.render)
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		
	}
});