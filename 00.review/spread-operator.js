let ary1 = [1, 3, 5, 7, 9]
let ary2 = [2, 4, 6, 8, 10]

// console.log(ary1);
// console.log(...ary1); // 展開輸出

let ary3 = [...ary1,...ary2] // 合併
// console.log(ary3);

// 求和
const sum = (...numbers) => {
  console.log(numbers);
  return numbers.reduce((a,b) => a + b)
}

// console.log(sum(1,4));

// 物件
const person = {name: 'John', age: 50}
const person2 = {...person} // 淺拷貝

// console.log(...person); // 報錯，不能這樣展開物件
console.log({...person});
console.log(person2);