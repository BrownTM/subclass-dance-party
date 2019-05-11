var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  this.$node = $('<img width="100" src="https://drive.google.com/uc?export=view&id=1PJjhoqRD-hnptvihkmLsZ6kgvmRrrqxB">');
  this.setPosition(top, left);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function


makeBlinkyDancer.prototype.step = function() {
  var oldStep = makeDancer.prototype.step;
  // call the old version of step at the beginning of any call to this new version of step
  oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.addClass('blinkyDancer');
  this.$node.toggle();
};

// return blinkyDancer;
// };