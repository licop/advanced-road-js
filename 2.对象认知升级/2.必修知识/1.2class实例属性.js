
//2 class 实例对象
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    // 实例属性
    getName = ()=> {
        return this.name
    }
    // 原型属性
    getAge(){
        return this.age
    }
}

const hasOwn = Object.hasOwnProperty;
const print = console.log;

var person = new Person('licop', '27');
print("getName:", hasOwn.call(person,"getName")) // true
print("getAge:", hasOwn.call(person,"getAge"))  // false

console.log(person.getAge())
console.log(person.getName())