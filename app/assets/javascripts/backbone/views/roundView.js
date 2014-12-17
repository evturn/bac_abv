console.log('we got roundView');

var RoundView = Backbone.View.extend({
	bacTemplate: _.template($('#bac-view-template').html()),
	addDrinkTemplate: _.template($('#add-drink-template').html()),
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},
	events: {
		"click #add-drink-button": "addDrink" 
	},
	url: '/rounds',
	render: function() {
		this.$el.html(this.bacTemplate(this.model.toJSON()));
		return this;
	}
	addDrink: function() {
		this.$el.html(this.addDrinkTemplate);
		$('#add-drink').append(this.$el);
		return this;
	}
});