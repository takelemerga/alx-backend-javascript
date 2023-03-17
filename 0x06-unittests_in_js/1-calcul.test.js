const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('testing Suite', () => {
  it('round the first argument and type is SUM', () => {
    assert.equal(calculateNumber('SUM', 2.0, 1), 3);
    assert.equal(calculateNumber('SUM', 1.3, 2), 3);
    assert.equal(calculateNumber('SUM', 2.5, 3), 6);
  });

  it('round the second argument and type is SUM', () => {
    assert.equal(calculateNumber('SUM', 1, 2.0), 3);
    assert.equal(calculateNumber('SUM', 2, 1.3), 3);
    assert.equal(calculateNumber('SUM', 3, 2.5), 6);
  });

  it('round the first argument and type is SUBTRACT', () => {
    assert.equal(calculateNumber('SUBTRACT', 2.0, 1), 1);
    assert.equal(calculateNumber('SUBTRACT', 1.3, 2), -1);
    assert.equal(calculateNumber('SUBTRACT', 2.5, 3), 0);
  });

  it('round the second argument and type is SUBTRACT', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 2.0), -1);
    assert.equal(calculateNumber('SUBTRACT', 2, 1.3), 1);
    assert.equal(calculateNumber('SUBTRACT', 3, 2.5), 0);
  });

  it('round the first argument and type is DIVIDE', () => {
    assert.equal(calculateNumber('DIVIDE', 2.0, 1), 2);
    assert.equal(calculateNumber('DIVIDE', 1.3, 2), 0.5);
    assert.equal(calculateNumber('DIVIDE', 2.5, 3), 1);
    assert.equal(calculateNumber('DIVIDE', 0.3, 2), 0);
    assert.equal(calculateNumber('DIVIDE', 1.5, 0), 'Error');
  });

  it('round the second argument and type is DIVIDE', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 2.0), 0.5);
    assert.equal(calculateNumber('DIVIDE', 2, 1.3), 2);
    assert.equal(calculateNumber('DIVIDE', 3, 2.5), 1);
    assert.equal(calculateNumber('DIVIDE', 2, 0.3), 'Error');
    assert.equal(calculateNumber('DIVIDE', 0, 0.2), 'Error');
  });

  it('return correct number', () => {
    assert.equal(calculateNumber('SUM', 2.0, 1.5), 4);
    assert.equal(calculateNumber('SUM', 1.3, 2.9), 4);
    assert.equal(calculateNumber('SUBTRACT', 2.49999, 6.1), -4);
    assert.equal(calculateNumber('SUBTRACT', 3.7, 2), 2);
    assert.equal(calculateNumber('DIVIDE', 1.3, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', 1, 3.5), 0.25);
  });
});
