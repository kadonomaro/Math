let mathMini = {
    smallestDivisor: function (num) {
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
    },
    factorial: function (num) {
        let counter = 1;
        let result = 1;
    
        while (counter <= num) {
            result = result * counter;
            counter++;
        }
        return result;
    },
    pow: function (x, y) {
        let result = 1;
        if (y === 0) {
            return 1;
        }
        if (y === 1) {
            return x;
        }
        for (let i = 0; i < y; i++) {
            result *= x;          
        }
        return result;
    },
    sqrt: function (num) {
        console.log(num);
    },
    degreeToRadians: function (degree) {
        let radians = degree * Math.PI / 180;
        return radians;
    }
};

export {mathMini};


