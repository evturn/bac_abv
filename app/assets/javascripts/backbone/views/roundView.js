console.log('we got roundView');

var RoundView = Backbone.View.extend({
	el: '#more-drinks',
	bacTemplate: _.template($('#bac-view-template').html()),
	addDrinkTemplate: _.template($('#add-drink-template').html()),
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},
	events: {
		"click #add-drink-button": "addDrink",
	},
	url: '/rounds',
	render: function() {
		this.$el.append(this.bacTemplate(this.model.toJSON()));
		return this;
	},
	addDrink: function(event) {
		event.preventDefault();
		$('#add-drink').append(this.addDrinkTemplate);
		return this;
	}
});