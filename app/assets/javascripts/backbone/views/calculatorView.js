console.log('we got calculatorView');

var NewTurtleView = Backbone.View.extend({
  className: "calculator",
  template: _.template($("#new-turtle-view-template").html()),
  events: {
    "submit" : "createTurtle"
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },
  createTurtle: function(e){
    e.preventDefault();
    turtleCollection.create({
      name: this.$("input[name='name']").val(),
      eyeband_color: this.$("input[name='eyeband_color']").val(),
      weapon: this.$("input[name='weapon']").val(),
      image_url: this.$("input[name='image_url']").val(),
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