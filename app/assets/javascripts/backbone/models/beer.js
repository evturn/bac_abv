console.log('we got beer');

var Beer = Backbone.Model.extend({
	defaults: {
		name: "",
		abv: "",
		style: "",
		label: "",
		description: "",
	},
	initialize: function(options) {

	},
	render: function() {
		var beerModel = this.model.toJSON();
		var beerView = new BeerView({model: beerModel});
	}
});