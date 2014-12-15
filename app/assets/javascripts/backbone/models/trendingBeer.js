console.log('we got trendingBeer');

var TrendingBeer = Backbone.Model.extend({
	defaults: {
		beer:{
			name: "",
			abv: "",
			style: "",
			label: "",
		},
		brewery: {
			name: "",
			url: "",
			city: "",
			state: "",
			country, ""
		}
	},
	url: '/trending',
	render: function() {
		var view = new TrendingBeerView({model: this});
	}
});