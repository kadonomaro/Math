import { mathMini } from "./math.js";

// console.log("Factiorial: ", mathMini.factorial(7));
// console.log("Smallest divisor: ", mathMini.smallestDivisor(21));
// console.log("Exponent: ", mathMini.pow(5, 5));
// console.log("Radian: ", mathMini.degToRad(45));
// console.log("Degree", mathMini.radToDeg(0.78539));
console.log("Square root", mathMini.sqrt(12));
console.log("Original Math sqrt", Math.sqrt(12));

let alertCount = 0;
for (let i = 0; i < 1000; i++) {
    let mine = mathMini.sqrt(i).toFixed(13);
    let origin = Math.sqrt(i).toFixed(13); 
    
    console.log(i + " Square root: ", mine);
    console.log(i + " Original Math sqrt: ", origin);
    if (mine !== origin) {
        console.error("ALERT");
        alertCount++;
    }
    console.log("--------------------------");
    
}
console.log("Alert count: ", alertCount);


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

