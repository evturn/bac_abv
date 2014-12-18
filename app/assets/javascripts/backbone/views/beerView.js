console.log('we got beerView');

var BeerView = Backbone.View.extend({
	tagName: 'div',
	className: 'found-beer',
	template: _.template($("#found-beer-template").html()),
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		$('#found-beer').append(this.$el);
		return this;
	},

});

