class MyArray {
    get [Symbol.toStringTag](){
        return "MyArray"
    }
}

var pf = console.log;
var a = new MyArray();
// [objct MyArray]
pf(Object.prototype.toString.call(a))