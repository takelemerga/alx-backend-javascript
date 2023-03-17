const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('testing Suite', function() {
  it('round the first argument', function() {
    assert.equal(calculateNumber(2.0, 1), 3);
    assert.equal(calculateNumber(1.3, 2), 3);
    assert.equal(calculateNumber(2.5, 3), 6);
  });

  it('round the second argument', function()  {
    assert.equal(calculateNumber(1, 2.0), 3);
    assert.equal(calculateNumber(2, 1.3), 3);
    assert.equal(calculateNumber(3, 2.5), 6);
  });

  it('return correct number', function() {
    assert.equal(calculateNumber(2.0, 1.5), 4);
    assert.equal(calculateNumber(1.3, 2.9), 4);
    assert.equal(calculateNumber(2.49999, 6.1), 8);
    assert.equal(calculateNumber(3.7, 2), 6);
    assert.equal(calculateNumber(1.3, 0), 1);
    assert.equal(calculateNumber(2, 3), 5);
  });
});
