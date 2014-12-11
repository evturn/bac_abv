console.log('we got beerView');

var BeerView = Backbone.View.extend({
	template: _.template($('#beer-results').html()),
	initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },
	render: function(){
		this.$el.html(this.template(this.model));
		return this;
	},
});