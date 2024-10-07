/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let p1,p2;
    p1 = 0;
    p2 = 1;

    for(let i=0;i<nums.length;i++) {
        if(nums[p1]!=nums[p2]) {
            p1++;
            nums[p1] = nums[p2];
        }
        p2++;
    }
    return p1

};