const calculateNumber = (type, a, b) => {
  const m = Math.round(a);
  const n = Math.round(b);
  if (type === 'SUM') {
    return m + n;
  }
  if (type === 'SUBTRACT') {
    return m - n;
  }
  if (type === 'DIVIDE') {
    return n === 0 ? 'Error' : m / n;
  }
  return 0;
};

module.exports = calculateNumber;
