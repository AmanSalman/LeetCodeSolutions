
// only positive numbers
let nums = [1,1,2,2,2,3]
const frequencySortPos = (nums) => {
  let freq = [0];
  
  nums.map((num)=>{
    if(!freq[num]) freq[num]=1;
    else freq[num]++;
  })
  
  const newone = freq.map((num,index)=>{
     return {num, freq: freq[num]}
  })
  
  newone.reduce(()=>{
    newone.sort((a,b)=>a.freq-b.freq)
    return newone;
  })
  
  nums = []
  newone.map((a,b)=>{
    if(a.freq !=0){
      for(let i=0; i<a.freq;i++) nums.push(a.num)
    }
  })
  
  return nums
}




// for positive & negative numbers
let nums2 = [2,3,1,3,2];
const frequencySort = (nums) => {
  let freq = {};

  nums.map((num) => {
    if (freq[num] === undefined ) freq[num] = 1;
    else freq[num]++;
  });


  const newone = Object.keys(freq).map((key) => {
    return { key: parseInt(key), value: freq[key] };
  });

  console.log(newone)
  newone.sort((a, b) => {
    if (a.value === b.value) {
      return b.key - a.key; // Sort by key in descending order if frequencies are equal
    }
    return a.value - b.value; // Sort by value in ascending order
  });

  nums = [];
  newone.map((obj) => {
    for (let i = 0; i < obj.value; i++) nums.push(obj.key);
  });

  return nums;
};


console.log(frequencySort(nums2));


// const numsMap = new Map();

// nums.forEach((num) => {
//   if (numsMap.has(num)) numsMap.set(num, numsMap.get(num) + 1);
//   else numsMap.set(num, 1);
// });