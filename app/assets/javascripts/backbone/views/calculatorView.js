console.log('we got calculatorView');

var NewTurtleView = Backbone.View.extend({
  className: "calculator",
  template: _.template($("#calculator-view-template").html()),
  events: {
    "submit" : "createBAC"
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },
  createBAC: function(e){
    e.preventDefault();
    round.create({
      sex: this.$("input[name='male']").val(),
      sex: this.$("input[name='female']").val(),
      lbs: this.$("input[name='lbs']").val(),
      drinks: this.$("input[name='drinks']").val(),
      abv: this.$("input[name='abv']").val(),
    });
    router.navigate('turtles', { trigger: true })
  }
});











// var CalculatorView = Backbone.View.extend({
// 	tagName: 'form',
// 	className: 'add-drink-button',
// 	template: _.template($('#add-drink-template').html()),
// 	initialize: function() {
// 		this.on('click', this.render());
// 	},
// 	render: function() {
// 		this.$el.html(this.template());
// 		$('#add-drink').prepend(this.$el);
// 		return this;
// 	}
// });