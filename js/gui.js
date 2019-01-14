import { mathMini } from "./math.js";

export function drawGUI() {

    drawFact();
    drawPow();
}

function drawFact() {
    let factInput = document.createElement("input");
    let factBtn = document.createElement("input");

    factInput.setAttribute("type", "text");
    factInput.setAttribute("placeholder", "Enter factorial")
    factInput.style.padding = "4px 8px";

    factBtn.setAttribute("type", "button");
    factBtn.setAttribute("value", "Calculate");
    factBtn.style.padding = "4px 8px";


    document.body.appendChild(factInput);
    document.body.appendChild(factBtn);

    factBtn.addEventListener('click', function () {
        factInput.value = mathMini.factorial(factInput.value);
    });
}

function drawPow() {
    let powInput = document.createElement("input");
    let powBtn = document.createElement('input');

    powInput.setAttribute("placeholder", "Enter X in Y exponent");
    powInput.style.padding = "4px 8px";

    powBtn.setAttribute("type", "button");
    powBtn.setAttribute("value", "Calculate");
    powBtn.style.padding = "4px 8px";

    document.body.appendChild(powInput);
    document.body.appendChild(powBtn);

    powBtn.addEventListener('click', function () {
        let str = powInput.value.split(" ");
        powInput.value = mathMini.pow(str[0], str[1]);
    });

}

