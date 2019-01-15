import { mathMini } from "./math.js";
import { drawGUI } from "./gui.js";
import { testMathSqrt, testMathPow } from "./test/test.js";
// console.log("Factiorial: ", mathMini.factorial(7));
// console.log("Smallest divisor: ", mathMini.smallestDivisor(21));
// console.log("Exponent: ", mathMini.pow(5, 5));
// console.log("Radian: ", mathMini.degToRad(45));
// console.log("Degree", mathMini.radToDeg(0.78539));
// console.log("Square root", mathMini.sqrt(12));
// console.log("Original Math sqrt", Math.sqrt(12));


drawGUI();

// testMathSqrt(50, 12);
// testMathPow(10, 2);
let arr = [5,5,6,7,8,9,10,12,5,17,22,13,5,14,18,5,6,7,8,9,10,12,14,5,2,14,3,5];
// console.log(mathMini.linearSearch(arr, 5));


let unsortedArray = [0, 14, 1, 9, 15, 7, 6, 11, 5, 3, 12, 2, 13, 8, 4];
let unsortedString = ["e","b", "a", "c", "f", "d"];

console.log(mathMini.bubbleSort(unsortedArray));
console.log(mathMini.bubbleSort(unsortedString));


