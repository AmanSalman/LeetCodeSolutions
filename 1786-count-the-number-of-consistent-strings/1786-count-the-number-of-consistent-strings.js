/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let temp="",j=0, res=0
    let SetTemp = new Set(allowed)
    for(let i = 0; i < words.length; i++){
        temp = words[i]
        while(j< temp.length){
            SetTemp.add(temp[j++])
        }
        j=0
        if(SetTemp.size == allowed.length) res++
        SetTemp = new Set(allowed)
    }
    return res
};