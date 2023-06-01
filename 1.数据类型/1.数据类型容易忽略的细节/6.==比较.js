// 本质 隐式转换

// null 只和 null 或者undefined这两个值相等，反过来也是一样
console.log(null == 0) // false  
console.log(null == undefined) // true


// 数字和布尔值的加法操作
// 当数字和布尔值进行加法操作时，JavaScript 会将布尔值隐式转换为数字，其中 true 转换为 1，false 转换为 0。e
const num1 = 1;
const bool1 = true;

console.log(num1 + bool1); // 2

const num2 = 2;
const bool2 = false;
console.log(num2 + bool2); // 2

// 当字符串和布尔值进行相等比较时
// JavaScript 会将字符串隐式转换为布尔值：空字符串 ""、"0"转换为 false
console.log('0' == false) // true
console.log('' == false) // true


// 数字和字符串的相等比较
// 当数字和字符串进行相等比较时，JavaScript 会将字符串隐式转换为数字
console.log(123 == '123') // true