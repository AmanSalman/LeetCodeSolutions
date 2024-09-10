/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = new Map()
  for(let i =0;i<nums.length;i++) {
    if(map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }
  const arr = [...map.entries()]
  arr.sort((a,b) => b[1] - a[1])
  return arr.slice(0, k).map(item => item[0])
};