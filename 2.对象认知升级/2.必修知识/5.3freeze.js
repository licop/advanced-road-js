// Object.freeze 不能添加属性 + 不可配置 + 不能修改值
// Objecr.freeze 可以用于前端保护常量和敏感信息

const obj = {
    prop: 42
};
  
Object.freeze(obj);
  
// 添加
obj.prop2 = 'prop2';
// 修改值
obj.prop = 33;
// 删除
delete obj.prop;

// Object.defineProperty(obj, 'prop', {
//     value: 10
// })

console.log(obj.prop); 
console.log(obj.prop2);
console.log(Object.isFrozen(obj))
