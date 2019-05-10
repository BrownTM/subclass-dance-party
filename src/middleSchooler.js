var makeMiddleSchooler = function(top, left, timeBetweenSteps) {
  this.left = left;
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeMiddleSchooler.prototype = Object.create(makeDancer.prototype);
makeMiddleSchooler.prototype.constructor = makeMiddleSchooler;

makeMiddleSchooler.prototype.step = function() {

  if (this.left === 20) {
    this.$node.addClass('girl');
  } else {
    this.$node.addClass('boy');
    this.$node.mouseover(function() {
      $(this).addClass('fadeOut');
    }).mouseleave(function() {
      $(this).removeClass('fadeOut');
    });
  }

};


