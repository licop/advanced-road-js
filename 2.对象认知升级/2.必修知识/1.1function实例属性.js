// 静态属性， 例如 Object.assign
// 原型属性，例如 Object.prototype.toString

//1. 函数作为构造实例
function Person(name, age){    
    this.name = name;
    this.age = age;
    this.getName = function(){
        return name
    }
}

// 原型属性
Person.prototype.getAge = function(){
    return this.age;
}

var person = new Person();

