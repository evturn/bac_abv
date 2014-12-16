console.log('we got roundView');

var RoundView = Backbone.View.extend({
	template: _.template($('#bac-template').html()),
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});