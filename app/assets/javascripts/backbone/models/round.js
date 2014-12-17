console.log('we got round')

var Round = Backbone.Model.extend({
	defaults: {
		sex: "",
		lbs: "",
		hours: "",
		drinks: "",
		bac: "",
		abv: ""
	},
	url: '/rounds'
});