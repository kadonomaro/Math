const mathMini = require('../math.js');


describe('mathMini Pow function: ', () => {
    test('should return the value of the number to the power of 3', () => {
        expect(mathMini.pow(2, 3)).toBe(8);
        expect(mathMini.pow(3, 3)).toBe(27);
        expect(mathMini.pow(4, 3)).toBe(64);
        expect(mathMini.pow(5, 3)).toBe(125);
    });

    test('should return the value of the number to the power of 5', () => {
        expect(mathMini.pow(2, 5)).toBe(32);
        expect(mathMini.pow(3, 5)).toBe(243);
        expect(mathMini.pow(4, 5)).toBe(1024);
        expect(mathMini.pow(5, 5)).toBe(3125);
    });

    test('should return the value of the number to the power of 10', () => {
        expect(mathMini.pow(2, 10)).toBe(1024);
        expect(mathMini.pow(3, 10)).toBe(59049);
        expect(mathMini.pow(4, 10)).toBe(1048576);
        expect(mathMini.pow(5, 10)).toBe(9765625);
    });
});


describe('mathMini Factorial function: ', () => {
    test('should return the factorial of the number', () => {
        expect(mathMini.factorial(3)).toBe(6);
        expect(mathMini.factorial(10)).toBe(3628800);
        expect(mathMini.factorial(15)).toBe(1307674368000);
    });
});


describe('mathMini sqrt function: ', () => {
    test('should return the square root of a number', () => {
        expect(mathMini.sqrt(5)).toBe(2.23606797749979);
        expect(mathMini.sqrt(15)).toBe(3.872983346207417);
        expect(mathMini.sqrt(35)).toBe(5.916079783099616);
        expect(mathMini.sqrt(45)).toBe(6.708203932499369);
        expect(mathMini.sqrt(55)).toBe(7.416198487095663);
        expect(mathMini.sqrt(65)).toBe(8.06225774829855);
        expect(mathMini.sqrt(75)).toBe(8.660254037844387);
        expect(mathMini.sqrt(85)).toBe(9.219544457292887);
        expect(mathMini.sqrt(95)).toBe(9.746794344808963);
        expect(mathMini.sqrt(105)).toBe(10.246950765959598);
        expect(mathMini.sqrt(115)).toBe(10.723805294763608);
    });
});


describe('mathMini bubbleSort function: ', () => {
    const arr = [5, 3, 2, 7, 9, 12, 15];
    test('should return sorted array', () => {
        expect(mathMini.bubbleSort(arr)).toEqual([2, 3, 5, 7, 9, 12, 15]);
    });
});


describe('mathMini fib function: ', () => {
    test('should return fibonacci numbers sequences', () => {
        expect(mathMini.fib(5)).toEqual([0, 1, 1, 2, 3, 5]);
        expect(mathMini.fib(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
        expect(mathMini.fib(20)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]);
    });
});