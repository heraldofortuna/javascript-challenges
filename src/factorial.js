const factorial = (number) => {
  if (number === 0) return 1;

  return number > 1 ? number * factorial(number - 1) : number;
};

module.exports = factorial;
