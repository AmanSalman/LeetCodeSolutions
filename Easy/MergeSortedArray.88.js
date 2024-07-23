
// let nums1 = [1,2,3,0,0,0]
// const m = 3
// let nums2 = [2,5,6]
// const n = 3
let  nums1 = [0], m = 0, nums2 = [1], n = 1

// let array = []


// let j = 0, k = 0

// while(j < n && k < m){
//   if(nums1[j] < nums2[k]){
//     array.push(nums1[j])
//     j++
//   } else if(nums1[j] == nums2[k]){
//     array.push(nums1[j], nums2[k])
//     j++
//     k++
//   }
//    else {
//     array.push(nums2[k])
//     k++
//   }
// }

// while(j < n){
//   array.push(nums1[j])
//   j++
// }

// while(k < m){
//   array.push(nums2[k])
//   k++
// }

// nums1 = array


// console.log(nums1)


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
          nums1[k--] = nums1[i--];
      } else {
          nums1[k--] = nums2[j--];
      }
  }

  while (j >= 0) {
      nums1[k--] = nums2[j--];
  }
};




