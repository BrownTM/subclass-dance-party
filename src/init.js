$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var random = function() {
      min = Math.ceil(1);
      max = Math.floor(2);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var kid = random();
    var left, dancer;
    if (kid === 1) {
      left = 20;
    } else {
      // left = 1225;
      left = 1185;
    }

    // make a dancer with a random position
    if (dancerMakerFunctionName === 'makeMiddleSchooler') {
      dancer = new dancerMakerFunction(
        ($('.floor').height() - 50) * Math.random(),
        left,
        Math.random() * 1000
      );
    } else {
      dancer = new dancerMakerFunction(
        ($('.floor').height() - 50) * Math.random(),
        ($('.floor').width() - 50) * Math.random(),
        Math.random() * 1000
      );
    }

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function() {
    // loop through all existing dancers
    window.dancers.forEach(function(dancer) {
      // for each, invoke their lineUp method
      // maybe in the forEach invocation, give them specific locations to line up
      dancer.lineUp();
      // with each iteration, add specific number to position so they're not in same spot
    });

  });

  $('.breakLineButton').on('click', function() {
    window.dancers.forEach(function(dancer) {
      dancer.breakLine();
    });
  });

  $('.harlemShakeButton').on('click', function() {
    window.dancers.forEach(function(dancer) {
      dancer.shake();
    });
  });

});

