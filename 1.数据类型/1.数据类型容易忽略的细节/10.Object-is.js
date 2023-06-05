// Object.is() 方法是 JavaScript 中用于比较两个值是否相等的方法

// 与 == 和 === 运算符的比较方式不同，Object.is() 方法在比较时不会进行类型转换，并且对于一些特殊值的比较更为准确。

// 如果两个值都是 NaN，则返回 true。
// 如果两个值都是 +0 或 -0，则返回 true。
// 如果两个值都是同一对象（引用地址相同），则返回 true。
// 在其他情况下，只有当两个值的类型相同且值相等时才返回 true。

console.log(Object.is(1, 1)); // true
console.log(Object.is(1, "1")); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false
console.log(Object.is({}, {})); // false

const obj = {};
console.log(Object.is(obj, obj)); // true            