// 类数组是一种具有索引属性和 length 属性的对象，它看起来像一个数组，但不具备数组的所有特性和方法。
// 常见的类数组包括函数的 arguments 对象和 DOM 元素的 NodeList 对象等

// Array.from
function sum() {
  const args = Array.from(arguments)
  return args.reduce((total, current) => total + current, 0)
}

console.log(sum(1, 2, 3)) // 6


// Array.prototype.slice.call()
const nodeList = document.querySelectorAll("p"); // 获取 DOM 元素的 NodeList 对象
const array = Array.prototype.slice.call(nodeList); // 将 NodeList 对象转化为数组

console.log(array); // [p, p, p, ...]


// 使用扩展运算符 ...
const nodeList = document.querySelectorAll("p"); // 获取 DOM 元素的 NodeList 对象
const array = [...nodeList]; // 将 NodeList 对象转化为数组

console.log(array); // [p, p, p, ...]