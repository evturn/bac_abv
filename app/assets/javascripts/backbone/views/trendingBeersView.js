console.log('we got trendingBeersView');

var TrendingBeersView = Backbone.View.extend({
	tagName: 'div',
	template: _.template($('#trending-beer-template').html()),
	render: function() {
    this.$el.html(this.template({collection: trendingBeers})); 
    $('#trending-beer').append(this.$el);
    return this;
  },
});