/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    let res = []
    let prefixXor = new Array(arr.length + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        prefixXor[i + 1] = prefixXor[i] ^ arr[i];
    }
    for(let i = 0; i < queries.length; i++) {
        res.push(prefixXor[queries[i][1] + 1] ^ prefixXor[queries[i][0]])
    }
    return res;
}