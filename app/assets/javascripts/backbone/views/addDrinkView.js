var addDrinkView = Backbone.View.extend({
	tagName: 'form',
	className: 'add-drink-button',
	template: _.template($('#add-drink-template').html()),
	initialize: function() {
		this.on('click', this.render());
	},
	render: function() {
		this.$el.html(this.template());
		$('#add-drink').prepend(this.$el);
		return this;
	}
});