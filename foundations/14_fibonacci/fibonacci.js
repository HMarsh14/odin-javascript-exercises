const fibonacci = function (num) {
    const n = parseInt(num);

    if (n < 0) return "OOPS";
    if (n === 0) return 0;

    const fib = [0, 1];

    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
};

// Do not edit below this line
module.exports = fibonacci;
