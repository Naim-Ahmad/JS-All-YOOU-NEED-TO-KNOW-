// First Class Function

/* 
1. A Function can be stored in a variable
2. A Function can be stored in an Array
3. A Function can be Stored in  an object
4. A we can Create Function as Need

// Higher Order Function
5. we can Pass Function as an arguments
6. We can return Functions from Another Function
 */

// 1. A Function can be stored in a variable
function add(a, b) {
    return a + b
}
var result = add 

console.log(result(5, 6))

// 2. A Function can be stored in an Array

var arr = []

arr.push(add(40, 40))

console.log(arr)

// 3. A Function can be Stored in  an object
var obj = {
    sum: add(50, 50),
}

console.log(obj)

// 4. A we can Create Function as Need
setTimeout(function () {
    console.log("I Have create a Function in 'setTimeout()' function ")
}, 2500)

// 5. we can Pass Function as an arguments
function passArgument(n, fun) {
    return n * fun
}

var result = passArgument(10, add(5, 5))
console.log(result)
// 6. We can return Functions from Another Function
// function sayHello(msg) {
//     return function (name) {
//         return msg + '' + name
//     }
// }

// var result2 = sayHello('Hello!')('HM Nayem')

// console.log(result2)

function base(b) {
    return function (n) {
        var result = 0
        for (var i = 0; i < b; i++) {
            result *= n
        }
        return result
    }
}

var result = base(10)(2)

console.log(result)
