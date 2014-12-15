console.log('we got featuredBeer');

var FeaturedBeer = Backbone.Model.extend({
	defaults: {
		beer: {
			name: "beer_name",
			beer_abv: "",
			style: "",
			label: "",
		},
		brewery: {
			brewery: "",
			city: "",
			state: "",
			country: ""
		}
	},
	url: '/featured',
	render: function() {
		var view = new FeaturedBeerView({model: this});
	}
});