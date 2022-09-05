const fibonacci = (n) => {
  let aux1 = 0,
    aux2 = 1,
    next = 0,
    fibArr = [1];

  for (let i = 1; i < n; i++) {
    next = aux1 + aux2;
    aux1 = aux2;
    aux2 = next;
    fibArr.push(next);
  }

  return fibArr;
};

module.exports = fibonacci;
