// TOP DOWN APPROACH
const fibo = (n, memo = [undefined, 1, 1]) => {
    // Check if we already have an existing value for memo
    if (memo[n] !== undefined) return memo[n];

    const result = fibo(n - 1, memo) + fibo(n - 2, memo);

    memo[n] = result;
    return result;
};

console.log(fibo(5));
console.log(fibo(10));
console.log(fibo(15));
console.log(fibo(25));
console.log(fibo(45));
