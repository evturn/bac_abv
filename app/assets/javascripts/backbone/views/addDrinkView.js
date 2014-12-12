console.log('we got drinkView')

var AddDrinkView = Backbone.View.extend({
	template: _.template($("#add-drink-template").html()),
	initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },
  render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});