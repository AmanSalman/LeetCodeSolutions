/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    const numberofDigits = x.toString();
    if(numberofDigits.length == 1) return true
    if(numberofDigits.length == 2){
        return numberofDigits[0] == numberofDigits[1] 
    }
    for(let i=0; i<numberofDigits.length;i++){
        if(numberofDigits[i]!= numberofDigits[numberofDigits.length-1-i]) return false
    }
    return true;
};

