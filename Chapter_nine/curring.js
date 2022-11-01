


function curring(a) {
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

var a = curring(10)(10)(10)

console.dir(a)


function curry(sum) {
    return function (a) {
        return function (b) {
            return sum(a, b)
        }
    }
}


function sum(a, b) {
    return a + b
}


var store = curry(sum)

console.log(store(1)(2))


function curry(func) {

    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
  
  }
function sum(a, b, c) {
    return a + b + c;
  }
  
  let curriedSum = curry(sum);
  
  alert( curriedSum(1, 2, 3) ); // 6, still callable normally
  alert( curriedSum(1)(2,3) ); // 6, currying of 1st arg
  alert( curriedSum(1)(2)(3) ); // 6, full currying