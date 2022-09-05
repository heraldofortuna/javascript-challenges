const trialDivision = (number) => {
  let primes = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      primes++;
    }
  }

  return primes === 2;
};

module.exports = trialDivision;
