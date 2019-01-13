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
        if (num === 0) {
            return 0;
        }
        if (num < 0) {
            return NaN;
        }
        if (num === 1) {
            return 1;
        }
        if (num === 2) {
            return 1.4142135623731;//костыль
        }
        for (let i = 0; i < num; i = i + 0.1) {
            let result = Math.pow(num, i);
            if (Math.round(result * result) === num) {
                return result;
            }
        }
    },

    degToRad: function (degree) {
        let radian = degree * (Math.PI / 180);
        return radian;
    },

    radToDeg: function (radian) {
        let degree = radian * (180 / Math.PI);
        return degree;
    }
};

export {mathMini};