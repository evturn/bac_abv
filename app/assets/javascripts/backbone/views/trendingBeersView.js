console.log('we got trendingBeersView');

var TrendingBeersView = Backbone.View.extend({
	el: $('#trending-list'),
	template: _.template($('#trending-beer-template').html()),
	initialize: function() {
		this.render;
	},
	render: function() {
    this.collection.forEach(function(trendingBeerModel){
    	var modelView = new TrendingBeerView({model: model});
      this.$el.append(modelView.render().$el);
    });
    return this;
  },
});