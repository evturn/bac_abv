console.log('we got app');
// BACKBONE
var featuredBeer  = new FeaturedBeer();
var trendingBeer  = new TrendingBeer();
var trendingBeers = new TrendingBeers();
var calculators   = new Calculators();
var beer          = new Beer();
var round         = new Round();





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

// AJAX

$(function(){
  $('#beer-search').on('submit', function(e){
    e.preventDefault();
    beerQuery = $('#search-bar').val();
    $.ajax({
      url: "/beers",
      data: {
        query: beerQuery
      },
      success: function(data) {
        
        var beer = new Beer(data);
        var view = new BeerView({model: beer});
        $('#found-beer').html(view.render().$el);
        $('#found-beer').addClass('found-beer clearfix');          

      }
    });
  });
  $('#calculator').on('submit #bac-submit', function(e){
      e.preventDefault();
      $.ajax({
          url: "/rounds",
          method: 'POST',
          data: { round: {
              sex: $(this).find("input[name='name']").val(),
              lbs: $(this).find("input[name='lbs']").val(),
              hours: $(this).find("input[name='hours']").val(),
              abv: $(this).find("input[name='abv']").val(),
              drinks: $(this).find("input[name='drinks']").val()
            },
          },
        success: function(data) {
          console.log(data)
          var round = new Round(data);
          var roundView  = new RoundView({ model: round });
          $('#bac-display').html(roundView.render().$el);
        }
      });
  });

});