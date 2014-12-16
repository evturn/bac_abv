console.log('we got app');

var featuredBeer  = new FeaturedBeer();
var trendingBeer  = new TrendingBeer();
var trendingBeers = new TrendingBeers();


$(function(){

	featuredBeer.fetch({
		success: function() {
			featuredBeer.render();
		}
	});

	trendingBeers.fetch({
		success: function() {
			trendingBeersView = new TrendingBeersView({collection: trendingBeers});
		}
	});

});


