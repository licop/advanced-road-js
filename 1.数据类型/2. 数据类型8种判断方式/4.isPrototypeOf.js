// isPrototypeOf() 是 JavaScript 中的一个方法，用于检查一个对象是否存在于另一个对象的原型链中

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person("John", 30);

console.log(Person.prototype.isPrototypeOf(john)); // true
console.log(Object.prototype.isPrototypeOf(john)); // true
console.log(Array.prototype.isPrototypeOf(john)); // false