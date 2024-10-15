/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const arrNew =[]
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i))
        arrNew.push(arr[i])
    }
    return arrNew
};