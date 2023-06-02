// 每个对象都有一个 constructor 属性，该属性引用了创建该对象的构造函数。
// 可以使用 constructor 属性来确定对象的类型或构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
const john = new Person("John", 30);
console.log(john.constructor); // 输出：[Function: Person]

const obj = { foo: "bar" };
console.log(obj.constructor); // 输出：[Function: Object]


// constructor可以被改写
String.prototype.constructor = function a() {
  return {}
}
// 如果没被改写为 [Function: String]
console.log("licop".constructor) // [Function: a]