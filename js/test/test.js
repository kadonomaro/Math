import { mathMini } from "../math.js";

export function testMathSqrt(testCount, digits) {
    let alertCount = 0;
    for (let i = 0; i <= testCount; i++) {
    let mine = mathMini.sqrt(i).toFixed(digits);
    let origin = Math.sqrt(i).toFixed(digits); 
    
    console.log(i + " Square root: ", mine);
    console.log(i + " Original Math sqrt: ", origin);
    if (mine !== origin) {
        console.error("ALERT");
        alertCount++;
    }
    console.log("--------------------------");
    
    }
    console.log("Alert count: ", alertCount);

}

export function testMathPow(testCount, number) {
    let alertCount = 0;
    for (let i = 0; i < testCount; i+=0.1) {
        let mine = mathMini.pow(number, i.toFixed(2));
        let origin = Math.pow(number, i.toFixed(2));

        console.log(i.toFixed(2) + " Exp: ", mine.toFixed(2));
        console.log(i.toFixed(2) + " Original Exp: ", origin.toFixed(2));
        if (mine !== origin) {
            console.error("ALERT");
            alertCount++;
        }
        console.log("--------------------------");
    }
    console.log("Alert count:", alertCount);
}

