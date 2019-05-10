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
      left = 1225;
    }

    // make a dancer with a random position
    if (dancerMakerFunctionName === 'makeMiddleSchooler') {
      dancer = new dancerMakerFunction(
        $('body').height() * Math.random(),
        left,
        Math.random() * 1000
      );
    } else {
      dancer = new dancerMakerFunction(
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 1000
      );
    }

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  // create on click event for class lineUpButton
  $('.lineUpButton').on('click', function(event) {
    // loop through all existing dancers
    window.dancers.forEach(function() {
      // for each, invoke their lineUp method

    });

  });


});

