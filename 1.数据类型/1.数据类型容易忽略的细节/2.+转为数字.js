// 可以使用加号 + 将一个字符串转换为数字。这种方式通常被称为“显式类型转换”或“类型转换强制”。
// 如果字符串中包含非数字字符，转换结果会变成 NaN
const print = console.log;

function toNumber(val) {
    const result = +val;
    print(result);
    return result
}

// 传统数据类型
toNumber(null) // NaN
toNumber(undefined) // NaN
toNumber(1) // 1
toNumber('123') // 123
toNumber("123aa") // NaN
toNumber({}) // NaN
toNumber(true) // 1

// ES6的 bigInt和Symbol类型不能转换为数字
// toNumber(10n)
// toNumber(Symbol.for("a"))