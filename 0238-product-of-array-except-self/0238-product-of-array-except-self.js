/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let product = 1;
    let zeroCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            product *= nums[i];
        } else {
            zeroCount++;
        }
    }

    let res = [];

    if (zeroCount > 1) {
        return new Array(nums.length).fill(0);
    }

    if (zeroCount === 1) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                res.push(product);
            } else {
                res.push(0);
            }
        }
    } else {
        for (let i = 0; i < nums.length; i++) {
            res.push(product / nums[i]);
        }
    }

    return res;
};
