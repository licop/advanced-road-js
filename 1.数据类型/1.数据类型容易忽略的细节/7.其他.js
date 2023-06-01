
// instanceOf和typeof性能比较， typeof比instanceOf快
// var count = 10000000;
// var func = function () { };

// var startTime = new Date();
// console.log(typeof func === "function");
// for (var j = 0; j < count; j++) {
//     typeof func === "function";
// }
// console.log('[typeof func === "function"] ' + (new Date().getTime() - startTime.getTime()));
// startTime = new Date();


// console.log(func instanceof Function);
// for (var k = 0; k < count; k++) {
//     func instanceof Function;
// }
// console.log('[func instanceof Function] ' + (new Date().getTime() - startTime.getTime()));




// 判断Number
// function isNumber(obj) {
//     if (typeof obj === 'number') {
//         return true;
//     }
//     return false;
// }



// null和undefined null是一个关键字，undefined是一个变量
var print = console.log;
// 获取指定对象上的指定属性的属性描述符（property descriptor）
print(Object.getOwnPropertyDescriptor(global, 'null'))
print(Object.getOwnPropertyDescriptor(global, 'undefined'))
