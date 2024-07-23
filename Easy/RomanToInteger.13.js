const symbol = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const value = [1, 5, 10, 50, 100, 500, 1000];
const number = 'LVIII'.split('');
console.log(number)

const symbNum = symbol.map((el, index)=>{
  return {symbol: el, value: value[index]};
})

const res = symbNum.filter((el,i)=>{
  return number.includes(el.symbol);
})

const symbolValueMap = symbNum.reduce((map, obj) => {
  map[obj.symbol] = obj.value;
  return map;
}, {});

console.log(symbolValueMap)
const res1= number.map(el => ({
  symbol: el,
  value: symbolValueMap[el]
}));

console.log(res1)


// console.log(number)
// for (let i = number.length - 1; i >= 0; i--){
//   if()
// }