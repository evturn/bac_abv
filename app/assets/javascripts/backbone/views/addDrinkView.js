console.log('we got addDrinkView')

var AddDrinkView = Backbone.View.extend({
	el: '#add-drink',
	template: _.template($('#add-drink-template').html()),
	initialize: function() {
		this.listenTo("click #add-drink-button", 'change', this.render);
	},
	render: function() {
		this.$el.html(this.template);
		$('#add-drink').append(this.$el);
		return this;
	}
});