var makeHarlemShaker = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img width="150" src="https://drive.google.com/uc?export=view&id=10kxHWdEYN67UBKpY7Qy9Wi84SfhOJy76">');
  this.setPosition(top, left);
};

makeHarlemShaker.prototype = Object.create(makeDancer.prototype);
makeHarlemShaker.prototype.constructor = makeHarlemShaker;

makeHarlemShaker.prototype.step = function() {
  var oldStep = makeDancer.prototype.step;

  oldStep.call(this);

  this.$node.addClass('shaker');
};