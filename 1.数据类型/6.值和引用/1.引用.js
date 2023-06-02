let a = [1, 2, 3]
let b = a
b.push(4)
console.log(a, b) // [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

let c = [1, 2, 3]
let d = c
d = [1, 2, 3, 4]
console.log(c, d) // [ 1, 2, 3 ] [ 1, 2, 3, 4 ]


// 函数参数
function foo(x) {
  x.push(4)
  console.log(x) // [ 1, 2, 3, 4 ]

  x = [4, 5, 6]
  x.push(7)
  console.log(x) // [ 4, 5, 6, 7 ]
}

let e = [1, 2, 3]
foo(e)
// 实际上是引用e的一个复本赋值给x，e仍指向[1, 2, 3]
console.log(e) // [ 1, 2, 3, 4 ]
