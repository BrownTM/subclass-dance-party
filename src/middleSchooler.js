var makeMiddleSchooler = function(top, left, timeBetweenSteps) {
  this.left = left;
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeMiddleSchooler.prototype = Object.create(makeDancer.prototype);
makeMiddleSchooler.prototype.constructor = makeMiddleSchooler;

makeMiddleSchooler.prototype.step = function() {

  if (this.left === 20) {
    this.$node.addClass('girl');
    this.$node.append('<img width="60" src="https://drive.google.com/uc?export=view&id=1BXzw0VRoWTX0IuCVOmu03mA4DDzHelIB">');
  } else {
    this.$node.addClass('boy');
    this.$node.append('<img width="60" src="https://drive.google.com/uc?export=view&id=1fAwDriBOasc1T3J0e8lZ1qN2ebVVkAxi">');
    this.$node.mouseover(function() {
      $(this).addClass('fadeOut');
    }).mouseleave(function() {
      $(this).removeClass('fadeOut');
    });
  }

};


