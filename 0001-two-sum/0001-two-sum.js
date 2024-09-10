/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let j;
  for(let i=0;i<nums.length;i++) {
    if(nums.includes(target- nums[i])){
      j = nums.findIndex(num => num == target- nums[i])
      if(j > -1){
        if(i===j) continue
        return [i, j] 
      }
    } 
  } 
};