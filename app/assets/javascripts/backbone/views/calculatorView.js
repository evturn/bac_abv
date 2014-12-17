console.log('we got calculatorView');

var CalculatorView = Backbone.View.extend({
  className: "calculator",
  template: _.template($("#bac-view-template").html()),
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