//переворот слов длиной больше 5 букв
function spinWords() {
    let words = arguments[0];
    words = words.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            words[i] = words[i].split('').reverse().join('');
            
        }
    }
    return words.join(' ');
}


function isIsogram(str) {
    let counter = 0;
    let strArr = str.toLowerCase().split('');
    debugger;
    for (let i = 0; i < strArr.length; i++) {
        let char = strArr[i];
        for (let j = 0; j < i; j++) {
            
            let next = strArr[j];
            if (char === next) {
                counter++;
            }
        }
        
    }
    if (counter > 0) {
        return false;
    } else {
        return true;
    }

}

console.log(isIsogram('aHas'));