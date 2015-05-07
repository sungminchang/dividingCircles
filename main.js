var circleModel = new CircleModel();
var circleModel2 = new CircleModel();
var circleView = new CircleView({model: circleModel});
var circleView2 = new CircleView({model: circleModel});
$('body').append(circleView.render());
$('body').append(circleView2.render());
