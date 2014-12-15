console.log('we got app');

var featuredBeer = new FeaturedBeer();


featuredBeer.fetch({
	success: function() {
		featuredBeer.render();
	}
});
