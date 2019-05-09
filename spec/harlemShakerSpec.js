describe('harlemShaker', function() {

  var harlemShaker, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    harlemShaker = new makeHarlemShaker(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(harlemShaker.$node).to.be.an.instanceof(jQuery);
  });

  it('should add a class \'shaker\' to each node', function() {
    sinon.spy(harlemShaker.$node, 'addClass');
    harlemShaker.step();
    expect(harlemShaker.$node.addClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(harlemShaker, 'step');
      expect(harlemShaker.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(harlemShaker.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(harlemShaker.step.callCount).to.be.equal(2);
    });
  });
});
