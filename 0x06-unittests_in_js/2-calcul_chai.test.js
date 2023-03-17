const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('testing Suite', () => {
  it('round the first argument and type is SUM', () => {
    expect(calculateNumber('SUM', 2.0, 1)).to.equal(3);
    expect(calculateNumber('SUM', 1.3, 2)).to.equal(3);
    expect(calculateNumber('SUM', 2.5, 3)).to.equal(6);
  });

  it('round the second argument and type is SUM', () => {
    expect(calculateNumber('SUM', 1, 2.0)).to.equal(3);
    expect(calculateNumber('SUM', 2, 1.3)).to.equal(3);
    expect(calculateNumber('SUM', 3, 2.5)).to.equal(6);
  });

  it('round the first argument and type is SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 2.0, 1)).to.equal(1);
    expect(calculateNumber('SUBTRACT', 1.3, 2)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', 2.5, 3)).to.equal(0);
  });

  it('round the second argument and type is SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 1, 2.0)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', 2, 1.3)).to.equal(1);
    expect(calculateNumber('SUBTRACT', 3, 2.5)).to.equal(0);
  });

  it('round the first argument and type is DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 2.0, 1)).to.equal(2);
    expect(calculateNumber('DIVIDE', 1.3, 2)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', 2.5, 3)).to.equal(1);
    expect(calculateNumber('DIVIDE', 0.3, 2)).to.equal(0);
    expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error');
  });

  it('round the second argument and type is DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 1, 2.0)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', 2, 1.3)).to.equal(2);
    expect(calculateNumber('DIVIDE', 3, 2.5)).to.equal(1);
    expect(calculateNumber('DIVIDE', 2, 0.3)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 0, 0.2)).to.equal('Error');
  });



  it('return correct number', () => {
    expect(calculateNumber('SUM', 2.0, 1.5)).to.equal(4);
    expect(calculateNumber('SUM', 1.3, 2.9)).to.equal(4);
    expect(calculateNumber('SUBTRACT', 2.49999, 6.1)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 3.7, 2)).to.equal(2);
    expect(calculateNumber('DIVIDE', 1.3, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 1, 3.5)).to.equal(0.25);
  });
});
