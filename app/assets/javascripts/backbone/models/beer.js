console.log('we got beer');

var Beer = Backbone.Model.extend({
	defaults: {
		name: "beer_name",
		abv: "beer_name",
		style: "beer_style",
		label: "beer_label",
		brewery: "brewery_name",
		city: "brewery_city",
		state: "brewery_state",
		country: "country_name",
	}
});