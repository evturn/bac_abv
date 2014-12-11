console.log('we got beerView');

var BeerView = Backbone.View.extend({
	tagName: "div",
	template: _.template($("#beer_results-template").html()),
	initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },
	render: function(){
		this.$el.html(this.template(this.model));
		return this;
	},
});

