typeof 123;       // "number"
typeof "hello";   // "string"
typeof true;      // "boolean"
typeof undefined; // "undefined"
typeof null;      // "object"
typeof Symbol();  // "symbol"
typeof function() {}; // "function"
typeof {};        // "object"
typeof [];        // "object"

// 判断isNull

function isNaN(val) {
  if(!val && typeof val === 'object') {
    return true
  }
  return false
} 


// 暂时性死区，不能被提前访问到
function log(){
    typeof a
    let a = 10;
}

log();