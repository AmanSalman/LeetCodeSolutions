/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const times = Math.floor(nums.length / 2);
  let c1 = 1, targ
  if (nums.length == 1) {
      return nums[0]
  }
  nums.sort()
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
          c1++
          targ = nums[i]
      } else {
          if (c1 > times) break;
      }
  }

  return targ
};