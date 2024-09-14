
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let array_copy = [...nums]
    array_copy = array_copy.sort((a, b) => b-a)
    let maxLen = array_copy[0], cnt = 0, ans=1
    for(let i = 0; i < nums.length; i++) {
        if(maxLen == nums[i]) {
            cnt++
        } else {
            cnt=0
        }
        ans = Math.max(ans, cnt)
    }
    return ans
};
