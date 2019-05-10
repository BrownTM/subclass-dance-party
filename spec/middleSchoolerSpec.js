describe('middleSchooler', function() {

  var middleSchooler, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    middleSchooler = new makeMiddleSchooler(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(middleSchooler.$node).to.be.an.instanceof(jQuery);
  });

  it('should add a class \'girl\' or \'boy\' to each node', function() {
    sinon.spy(middleSchooler.$node, 'addClass');
    middleSchooler.step();
    expect(middleSchooler.$node.addClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should not call step', function() {
      sinon.spy(middleSchooler, 'step');
      expect(middleSchooler.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(middleSchooler.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps);
      expect(middleSchooler.step.callCount).to.be.equal(0);
    });
  });
});