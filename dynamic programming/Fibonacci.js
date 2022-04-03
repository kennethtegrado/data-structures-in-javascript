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

// BETTER PERFORMANCE THAN TOP UP
// BOTTOM UP APPROACH
const bottomFibonacci = (n) => {
    // GUARD CLAUSE
    // Check if n is less than or equal to 2
    if (n <= 2) return 1;

    // Array for fast random access
    const fiboNacciTable = [undefined, 1, 1];

    // Iterate every sequence
    for (let i = 3; i <= n; i++)
        fiboNacciTable[i] = fiboNacciTable[i - 1] + fiboNacciTable[i - 2];

    // Return the fibonacci value
    return fiboNacciTable[n];
};

console.log(bottomFibonacci(5));
console.log(bottomFibonacci(10));
console.log(bottomFibonacci(15));
console.log(bottomFibonacci(25));
console.log(bottomFibonacci(45));
