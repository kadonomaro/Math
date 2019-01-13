let factorial = (num) => {
    let counter = 1;
    let result = 1;

    while (counter <= num) {
        result = result * counter;
        counter++;
    }
    return result;
}

console.log(factorial(10));

let smallestDivisor = (num) => {
    let divisor = 2;
    if (num <= 0) {
        return NaN;
    }
    if (num === 1) {
        return 1;
    }
    while (num % divisor !== 0) {
        divisor++;
    }
    return divisor;

}

console.log(smallestDivisor(50));