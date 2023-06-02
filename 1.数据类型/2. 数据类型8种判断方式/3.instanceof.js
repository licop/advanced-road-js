// instanceof 用于检查对象是否是指定构造器的实例
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person("John", 30);

console.log(john instanceof Person); // true
console.log(john instanceof Object); // true


// 安全性不如typeof
aaaa instanceof Object 
// Uncaught SyntaxError: Unexpected identifier
typeof aaaa // 'undefined'


// 右边必须是函数或者class
// var aaaa = "";
// aaaa instanceof {} 


// 实现一个instanceof
function myInstanceOf(obj, constructor) {
  // 如果第一个参数不是对象，直接返回 false
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  // 获取第二个参数的原型对象
  let proto = constructor.prototype;

  // 获取第一个参数的原型对象
  let objProto = Object.getPrototypeOf(obj);

  // 从第一个参数的原型对象开始，沿着原型链逐级向上查找
  while (objProto !== null) {
    // 如果找到了第二个参数的原型对象，说明第一个参数是第二个参数的实例
    if (objProto === proto) {
      return true;
    }
    // 继续沿着原型链向上查找
    objProto = Object.getPrototypeOf(objProto);
  }

  // 如果找到了 null，说明已经到达了原型链的顶端，返回 false
  return false;
}