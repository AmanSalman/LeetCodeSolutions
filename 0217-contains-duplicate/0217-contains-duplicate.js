/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const mySet = new Set();
    nums.map(item => mySet.add(item))
    return mySet.size != nums.length ? true : false
};

containsDuplicate([1,2,3,4])
