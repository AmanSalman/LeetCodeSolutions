/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    let arr = Array.from(s)

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === 'A' && arr[i + 1] == 'B') || (arr[i] === 'C' && arr[i + 1] == 'D')) {
            arr.splice(i, 2)
            i -= 2
        }
    }

    return arr.join('').length
};