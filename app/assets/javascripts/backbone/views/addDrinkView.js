console.log('we got drinkView')

var AddDrinkView = Backbone.View.extend({
	template: _.template($("#add-drink-template").html()),
	initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },
  events: { 
  	"submit #add-drink-button" : "addDrink"
  },
  render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	addDrink: function(){
		var addDrinkView = new AddDrinkView();
		$('#add-drink-display').html(addDrinkView.render().$el);
	}
});