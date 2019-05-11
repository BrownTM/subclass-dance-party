var makeBreakDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img width="100" src="https://drive.google.com/uc?export=view&id=1i1lsz-Ubg_-BdbczeRFKLfzXmeExHF3W">');
  this.setPosition(top, left);
};

makeBreakDancer.prototype = Object.create(makeDancer.prototype);
makeBreakDancer.prototype.constructor = makeBreakDancer;

makeBreakDancer.prototype.step = function() {
  var oldStep = makeDancer.prototype.step;
  oldStep.call(this);
  this.$node.addClass('breakDancer');
};