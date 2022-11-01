// Normal function

// function sum1(num1, num2) {
//   return num1 + num2
// }

// console.log(sum1(10, 20))

// let sum2 = (num1, num2) => {
//   return num1, num2
// }

// console.log(sum2(10, 20))

// function print1() {
//   console.log("I am Normal function")
// }

// print1()

// let print2 = () => {
//   console.log("I am Arrow Function ")
// }

// print2()

// let arr = [
//   {
//     sirial: 322,
//     name: "Nayem",
//     age: 25,
//   },
//   {
//     sirial: 323,
//     name: "Habibullah",
//     age: 18,
//   },
//   {
//     sirial: 324,
//     name: "Abid",
//     age: 22,
//   },
//   {
//     sirial: 325,
//     name: "Tawhid",
//     age: 25,
//   },
// ]

// function namePrint() {
//    return arr.filter(function (value) {
//         return value.age > 18
//     }).map(function (value) {
//         return value.name
//     })
// }

// console.log(namePrint());

// let namePrint2 = () => arr.filter((value) =>  value.age > 22 ).map((value) =>  value.name )

// console.log(namePrint2());


// function sqrt(a, b) {
//   return a * b
// }

// var sqr = sqrt(5, 5)
// console.log(sqr);


// var sqrt = (a, b) => a * b

// console.log(sqrt(5, 6))


// var obj = [
//   {
//     name: 'Arif',
//     age: 18,
//     total: 100
//   },

//   {
//     name: 'Asif',
//     age: 20,
//     total: 101
//   }
// ]

function countTrue(arr) {
	var count = 0
	for(var i = 0; i<arr.length; i++){
    if (arr[i] === true) {
      count += arr[i]
    }
	}
	return count
}

console.log(countTrue([true, false, true, false, true, false]))
