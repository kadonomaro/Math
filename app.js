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




function isIsogram(str){
    let strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
    
    }
  }