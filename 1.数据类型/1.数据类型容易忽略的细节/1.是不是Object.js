// 类型标记位
// 000： object  
// 001： integer   
// 010： double   
// 100： string   
// 110： boolean

// 使用typeof判断是否是Object
const obj1 = { name: 'John', age: 18 };
const arr1 = [1, 2, 3];
const str1= 'Hello, world!';

console.log(typeof obj1 === 'object'); // true
console.log(typeof arr1 === 'object'); // true
console.log(typeof str1 === 'object'); // false

// 需要注意的是使用typeof方法判断是否为对象并不可靠
// 由于历史原因typeof null 的返回值是 'object'，而非 'null'

// 使用 Object.prototype.toString.call() 方法判断值的内部类型
const obj = { name: 'John', age: 18 };
console.log(Object.prototype.toString.call(obj) === '[object Object]'); // true

const arr = [1, 2, 3];
console.log(Object.prototype.toString.call(arr) === '[object Array]'); // true