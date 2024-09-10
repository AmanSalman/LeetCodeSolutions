/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     nums.sort((a,b)=> a-b)
     const Freq = new Map()
     for(let i = 0; i < nums.length; i++){
         Freq.set(nums[i], (Freq.get(nums[i]) || 0) + 1)
     }
     for(let [key, value] of Freq){
         if(value === 1) return key
     }
}