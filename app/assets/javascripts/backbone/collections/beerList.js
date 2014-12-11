console.log('we got beerList');

var BeerList = Backbone.Collection.extend{(
	model: Beer,
	url: '/beers'
)};