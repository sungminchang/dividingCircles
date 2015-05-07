var CircleModel = Backbone.Model.extend({
  defaults: {
    height: 200,
    width: 200,
    cx: 100,
    cy: 100,
    r: 100,
    fill: 'grey'
  }
});

// <svg height="100" width="100">
//   <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
// </svg>