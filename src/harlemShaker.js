var makeHarlemShaker = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeHarlemShaker.prototype = Object.create(makeDancer.prototype);
makeHarlemShaker.prototype.constructor = makeHarlemShaker;

makeHarlemShaker.prototype.step = function() {
  var oldStep = makeDancer.prototype.step;

  oldStep.call(this);

  this.$node.addClass('shaker');
};