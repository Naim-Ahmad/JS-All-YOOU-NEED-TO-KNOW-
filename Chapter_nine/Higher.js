/* Higher Order Function
5. we can Pass Function as an arguments
6. We can return Functions from Another Function
*/

// function add(a, b) {
//   return a + b
// }

// function manipulate(a, b, func) {
//   var sum = a + b

//   var add = a - b

//   function final() {
//     var m = func(a, b)

//     return sum * add * m
//   }

//   return final
// }
// var multiply = manipulate(6, 4, add)

// console.log(multiply())

// function formalGreeting() {
//     console.log("How are you?");
//   }
//   function casualGreeting() {
//     console.log("What's up?");
//   }
//   function greet(type, greetFormal, greetCasual) {
//     if(type === 'formal') {
//       greetFormal();
//     } else if(type === 'casual') {
//       greetCasual();
//     }
//   }
//   // prints 'What's up?'
//   greet('casual', formalGreeting, casualGreeting);

// var arr = [4, 7, 8, 9, 2]

// arr.forEach(function (value) {
//     console.log(value)
// })

function caller() {
  return function (name) {
    return name + " " + "Calling YOu!"
  }
}

var callerVar = caller()
var callerAkash = callerVar("Akash")
console.log(callerAkash)

setTimeout(function () {
  var callerAsik = callerVar("Ashik")
  console.log(callerAsik)
}, 1000)


