console.log('we got app');

var featuredBeer   = new FeaturedBeer();
var trendingBeer   = new TrendingBeer();
var trendingBeers  = new TrendingBeers();
var beer           = new Beer();

var roundModel = new Round();
var startRoundView = new RoundView({model: roundModel});


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



$(function(){

  
  $('#beer-search').click(function(){
         $("#beaker").effect( "shake", 
          {times:4}, 1000 );
      });

  $('#beer-search').on('submit', function(e){
    e.preventDefault();
    beerQuery = $('#search-bar').val();
    $.ajax({
      url: "/beers",
      data: {
        query: beerQuery
      },
      success: function(data) {
        debugger;
        beer = new Beer(data);
        var view = new BeerView({model: beer});
        $('#found-beer').html(view.render().$el);
        $('#found-beer').addClass('found-beer clearfix');

      }
    });
  });

  $('#calculator').on('click', '#bac-submit', function(e){
    e.preventDefault();
    $calculator = $('#calculator');
    $.ajax({
        url: "/rounds",
        method: 'POST',
        data: { round: {
            sex: $calculator.find("input[name='name']").val(),
            lbs: $calculator.find("input[name='lbs']").val(),
            hours: $calculator.find("input[name='hours']").val(),
            abv: $calculator.find("input[name='abv']").val(),
            drinks: $calculator.find("input[name='drinks']").val()
          }
        },
      success: function(data) {
        console.log(data)
        var round = new Round(data);
        var roundView  = new RoundView({ model: round });
        $('#bac-display').html(roundView.render().$el);
      }
    });
  });

  $('#beer-search').on('click', '#select-abv-button', function(){
    var abv = $('#selected-abv').text();
    $('input[name="abv"]').last().attr('value', abv);
  })




});