console.log('we got trendingBeersView');

var TrendingBeersView = Backbone.View.extend({
	el: $('#trending-list'),
	template: _.template($('#trending-beer-template').html()),
	initialize: function() {
		this.render;
	},
	render: function() {
    this.collection.forEach(function(trendingBeerModel){

    });
    return this;
  },
});