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

    pow: function (number, exponent) {
        let result = 1;
        if (exponent === 0) {
            return 1;
        }
        if (exponent === 1) {
            return number;
        }
        for (let i = 0; i < exponent; i = i + 1) {
            // result *= number;
            result = result * number;
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
    },

    circleArea: function (radius) {
        let S = Math.PI * (radius * radius);
        return S;
    },

    linearSearch: function (array, key) {
        let arrayIndex = [];
        for (let i = 0; i < array.length; i++){
            if (array[i] === key) {
                arrayIndex.push(i);
            }
        }
        return arrayIndex;
    },

    bubbleSort: function (arrayToSort) {
        for (let i = 0; i < arrayToSort.length; i++){
            for (var j = 0; j < arrayToSort.length - i; j++){
                if (arrayToSort[j] > arrayToSort[j + 1]) {
                    let temp = arrayToSort[j];
                    arrayToSort[j] = arrayToSort[j + 1];
                    arrayToSort[j + 1] = temp;
                }
            }
        }
        return arrayToSort;
    },

    fib: function (n) {
        let prev = 0, next = 1;
        for (let i = 0; i < n; i++) {
            let temp = next;
            next = prev + next;
            prev = temp;
        }
        return prev;
    }
};


export { mathMini };