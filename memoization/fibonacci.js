const funcs = {
  fib: function (n, memo = { '0': 0, '1': 1 }) {
    if (typeof memo[n] !== 'number') {
      memo[n] = funcs.fib(n-1, memo) + funcs.fib(n-2, memo);
    }

    return memo[n];
  },
};

const result = funcs.fib(6);

console.log({ result });

module.exports = funcs;
