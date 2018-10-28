module.exports = function make(...args) {
  const numbers = [];
  const func = ((...params) => {
    if (params.length === 1 && params[0] instanceof Function) {
      return numbers.reduce((sum, x) => params[0](sum, x), 0);
    }
    params.forEach(x => numbers.push(x));
    return func;
  });
  return func(...args);
};
