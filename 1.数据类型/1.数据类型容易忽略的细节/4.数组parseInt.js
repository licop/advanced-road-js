var results = ["1", "2", "3"].map(parseInt);
console.log(results);


// parseInt() 两个参数：要解析的字符串和解析时使用的进制数。如果没有指定进制数，则默认使用十进制。
["1", "2", "3"].map((val,index)=> parseInt(val,index))  // [ 1, NaN, NaN ]
// parseInt("1",0)
// parseInt("2",1)
// parseInt("3",2)