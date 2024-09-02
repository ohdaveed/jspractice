function calculateSum(a, b) {
  // Existing code
  const sum = a + b;

  // Additional part
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }

  return sum;
}