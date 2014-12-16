console.log('we got trendingBeersView');

var TrendingBeersView = Backbone.View.extend({
	el: '#trending-list ul',
	initialize: function() {
		this.render();
	},
	render: function() {
    this.collection.models.forEach(function(model){
    	var modelView = new TrendingBeerView({model: model});
      this.$el.append(modelView.render().$el);
    }.bind(this));
    return this;
  },
});