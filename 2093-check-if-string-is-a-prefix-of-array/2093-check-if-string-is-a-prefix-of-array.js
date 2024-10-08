/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */

var isPrefixString = function(s, words) {
    let str =''
    for(let i= 0; i < words.length; i++) {
        str = str + words[i]
        if(str === s) {
            return true
        }
    }
    return false
};

// var isPrefixString = function(s, words) {
//     for(let i= 0; i < words.length; i++) {
//         console.log(s)
//         if(s.startsWith(words[i])) {
//             s = s.replace(words[i], '');
//        } else {
//         break
//        }
//     }
//     return s.length ==0 ? true : false
// };