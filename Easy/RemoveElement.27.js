/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = nums.length - 1, temp = 0, times = 0
  for (let i = 0; i <= k; i++) {
      if (nums[i] === val) {
          temp = nums[k]
          nums[k] = nums[i]
          nums[i] = temp
          k--
          i--
          times++
      }
  }

  for (let i = 0; i < times; i++) {
      nums.pop()
  }
  return nums.length
};