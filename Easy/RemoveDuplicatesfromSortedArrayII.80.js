/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let c= 1,times = 0
  
  for(let i=0; i<nums.length; i++){
    if(nums[i] === nums[i+1]){
      c++
    }
  
    if(c === 2 && nums[i] != nums[i+1]){
      c=1
    }
  
    if(c>2){
      times = i
      while(nums[times] === nums[times+1]){
        nums.splice(times,1)
      }
      c=1
    }
  }
  console.log(nums)
  return nums.length
  };

  removeDuplicates([0,0,1,1,1,1,2,3,3])