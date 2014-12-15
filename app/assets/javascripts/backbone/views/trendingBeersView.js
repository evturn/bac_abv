console.log('we got trendingBeersView');

var TrendingBeersView = Backbone.View.extend({
	tagName: 'ul',
	className: 'trending-list',
	template: _.template($('#trending-beer-template').html()),
	render: function() {
    var renderedHTML = this.template({trenderBeers: this.collection});
    this.$el.html(renderedHTML);
    return this;
  },
});