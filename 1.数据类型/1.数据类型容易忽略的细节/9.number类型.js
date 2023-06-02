let pt = console.log

let a = 42.59 

pt(a.toFixed(0)) //43
pt(a.toFixed(1)) //42.6
pt(a.toFixed(2)) // 42.59
pt(a.toFixed(3)) // 42.590
pt(a.toFixed(4))

// 无效语法
// 42.toFixed(3)

// 有效
pt((42).toFixed(3)) // 42.000
pt(42..toFixed(3))  // 42.000


pt(0.1 + 0.2 === 0.3) // false

// 整数检查
pt(Number.isInteger(42)) // true
pt(Number.isInteger(42.6)) // false