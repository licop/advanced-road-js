// Object.seal 对象封闭，不可以添加新属性，不可以删除对象
const object1 = {
    property1: 42
};

Object.seal(object1);

// 不可以 添加属性
object1.property2 = 22;
console.log(object1.property2); // undefined

// 不可以 删除属性
delete object1.property1;
console.log(object1.property1); // 42

