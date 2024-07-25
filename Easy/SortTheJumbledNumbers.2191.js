/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {

    let numbers = []
    let numStr = '', ten = 1, temp = 0
    for (let i = 0; i < nums.length; i++) {
        numStr = nums[i].toString()
        for (let j = numStr.length - 1; j >= 0; j--) {
            temp = temp + mapping[parseInt(numStr.charAt(j))] * ten
            ten *= 10
        }
        numbers.push({ val: temp, org: nums[i] })
        ten = 1
        temp = 0
        numStr = ''
    }

    numbers.sort((a, b) => {
        if (a.val === b.val) return 0
        else return a.val - b.val
    })

    numbers = numbers.map((a) => {
        return a.org
    })

    return numbers
};
