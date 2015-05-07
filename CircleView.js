var CircleView = Backbone.View.extend({
  
  initialize: function() {
  },

  events: {
    'mouseenter circle': function(e) { this.split(e); }
  },

  template: function() {
    return Handlebars.compile($('#circle-view').html());
  },

  newModels: function(i) {
    var results = [];

    var cx = this.model.get('cx');
    var cy = this.model.get('cy');
    var xPositions = [cx / 2, cx * 3 / 2 ];
    var yPositions = [cy / 2, cy * 3 / 2 ];
    var coords = [];
    // var iX = 0;
    // var iY = 0;

    for (var i = 0; i < 2; i++) {
      for (var j = 0; j < 2; j++) {
        coords.push([xPositions[i], yPositions[j]]);
      }
    }

    for (var i = 0; i < 4; i++) {
      results.push(new CircleModel({
        height: this.model.get('height') / 2,
        width: this.model.get('width') / 2,
        cx: coords[i][0],
        cy: coords[i][1],
        r: this.model.get('r') / 2,
        fill: 'grey'
      })
      );
    }
    

    return results;
  },

  split: function(e) {
    console.log('logging out the event variable', e);
    this.$el.children().children().detach();
    var newModels = this.newModels();
    // debugger;
    for (var i = 0; i < 4; i++) {
      this.$el.children().append(new CircleView({model: newModels[i]}).render().children().children());
    }
    

  },

  render: function() {
    this.$el.html(this.template()(this.model.attributes));
    return this.$el;
  }

});