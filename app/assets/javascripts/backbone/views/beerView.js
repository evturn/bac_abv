console.log('we got beerView');

var BeerView = Backbone.View.extend({
	tagName: 'div',
	className: 'found-beer',
	template: _.template($("#found-beer-template").html()),
	// initialize: function() {
	// 	this.listenTo(this.model, 'change', selectAbv);
	// },
	// events: {
	// 	"submit #select-abv-button": "selectAbv"
	// },
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		$('#found-beer').append(this.$el);
		return this;
	},
	selectAbv: function(event) {
		event.preventDefault();
		$('#calculator').find("input[name='abv']").append($('#selected-abv').val());
		return this;
	}
});

