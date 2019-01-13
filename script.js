import { mathMini } from "./math.js";

console.log("Factiorial: ", mathMini.factorial(7));
console.log("Smallest divisor: ", mathMini.smallestDivisor(21));
console.log("Exponent: ", mathMini.pow(0, 10));
console.log("Radians: ", mathMini.degreeToRadians(45));


var powInput = document.createElement("input");
var powBtn = document.createElement("input");

powInput.setAttribute("type", "text");
powInput.setAttribute("placeholder", "Enter factorial")
powInput.style.padding = "4px 8px";

powBtn.setAttribute("type", "button");
powBtn.setAttribute("value", "Calculate");
powBtn.style.padding = "4px 8px";


document.body.appendChild(powInput);
document.body.appendChild(powBtn);

powBtn.addEventListener('click', function () {
    powInput.value = mathMini.factorial(powInput.value);
});