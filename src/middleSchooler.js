var makeMiddleSchooler = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeMiddleSchooler.prototype = Object.create(makeDancer.prototype);
makeMiddleSchooler.prototype.constructor = makeMiddleSchooler;

makeMiddleSchooler.prototype.step = function() {
  var oldStep = makeDancer.prototype.step;
  oldStep.call(this);

  var getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var kid = getRandomInt(1, 2);
  if (kid === 1) {
    this.$node.addClass('girl');
  } else {
    this.$node.addClass('boy');
  }

};