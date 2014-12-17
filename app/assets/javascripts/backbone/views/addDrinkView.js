console.log('we got addDrinkView')

var AddDrinkView = Backbone.View.extend({
	className: 'add-drink',
	template: _.template($('#add-drink-template').html()),
	initialize: function() {
		this.listenTo("click .add-drink", 'change', this.render);
	},
	url: '/rounds',
	render: function() {
		this.$el.html(this.template(this.model.toJSO()));
		$('#add-drink').append(this.$el);
		return this;
	}
});