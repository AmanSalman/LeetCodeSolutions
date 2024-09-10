/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
      if(nums.length == 0) return 0;
  nums =  [...new Set(nums)].sort((a, b) => a - b)
  let cnt = 1, max=0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i]+1 == (nums[i + 1])){
      cnt++;
    } else {
      if(cnt >= max) max = cnt
      cnt = 1;
    }
  }
  return Math.max(max, cnt);
};