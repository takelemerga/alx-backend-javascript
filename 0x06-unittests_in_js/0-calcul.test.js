const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('testing Suite', () => {
  it('testcase 1', () => {
    assert.strictEqual(calculateNumber(2.0, 1), 3);
  });

  it('testcase 2', () => {
    assert.strictEqual(calculateNumber(0, 1), 1);
  });

  it('testcase 3', () => {
    assert.strictEqual(calculateNumber(3.5, 4.7), 9);
  });

  it('testcase 4', () => {
    assert.strictEqual(calculateNumber(-2, 1), -1);
  });

  it('testcase 5', () => {
    assert.strictEqual(calculateNumber(3.49999, 6.49999), 9);
  });

  it('testcase 6', () => {
    assert.strictEqual(calculateNumber(-3.45, -2.61), -6);
  });

  it('testcase 7', () => {
    assert.strictEqual(calculateNumber(999.999, 1), 1001);
  });
});
