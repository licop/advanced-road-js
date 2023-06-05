var obj = {};

// 常规属性，键为字符串的属性，根据创建时的顺序排序
obj.p1 = "str1";
obj.p6 = "str6";
obj.p2 = "str2";

// 排序属性，键为数字的属性，根据索引值大小升序排序
obj[1] = 'num1';
obj[6] = 'num6';
obj[2] = 'num2';

for (var p in obj) {
    console.log("property:", obj[p])
}
// 打印顺序
// property: num1
// property: num2
// property: num6
// property: str1
// property: str6
// property: str2

