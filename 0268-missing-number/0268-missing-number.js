/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let maxNum = nums.length
    let expected = (maxNum* (maxNum +1))/2
    let actual = 0
    nums.map(item =>{
        actual += item
    })
    return expected - actual
};