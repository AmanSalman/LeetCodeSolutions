let nums = [1,2,3,4,5,6,7], k = 3

/*
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  while(k--){
    let temp = nums.pop();
    nums.unshift(temp);
  }
  return nums;
};

console.log(rotate(nums, k)); // Output: [5,6,7,1,2,3,4]

