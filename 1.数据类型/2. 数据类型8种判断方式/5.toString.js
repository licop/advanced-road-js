// 用于任何 JavaScript 值，包括原始类型和对象类型
console.log(Object.prototype.toString.call(123)); // "[object Number]"
console.log(Object.prototype.toString.call("hello")); // "[object String]"
console.log(Object.prototype.toString.call(true)); // "[object Boolean]"
console.log(Object.prototype.toString.call(undefined)); // "[object Undefined]"
console.log(Object.prototype.toString.call(null)); // "[object Null]"
console.log(Object.prototype.toString.call(Symbol())); // "[object Symbol]"
console.log(Object.prototype.toString.call(function() {})); // "[object Function]"
console.log(Object.prototype.toString.call({})); // "[object Object]"
console.log(Object.prototype.toString.call([])); // "[object Array]"
console.log(Object.prototype.toString.call(new Date())); // "[object Date]"
console.log(Object.prototype.toString.call(/regex/)); // "[object RegExp]"



const pf = console.log;

pf(typeof Boolean.prototype) // object
pf(Object.prototype.toString.call(Boolean.prototype)) // [object Boolean]