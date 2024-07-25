/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  nums.sort((a,b)=>{
    return a-b; 
  })
  return nums
};

console.log(sortArray([-2,3,-5]))
