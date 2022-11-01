var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// var sum = arr.reduce(function(prev, corr, index, arr){
//     return prev + corr
// })
// console.log(sum);



// var max = arr.reduce(function(prev, corr){
//     return Math.max(prev, corr)
// })

// console.log(max)

// var min = arr.reduce(function(prev, corr){
//     return Math.min(prev, corr)
// })
// console.log(min);

// function reduce(arr, cb, acc){
//     for(var i = 0; i < arr.length; i++){
//         acc = cb(acc, arr[i])
//     }
//     return acc
// }

// var sum = reduce(arr, function(prev, corr){
//     return prev + corr
// }, 0)

// console.log(sum)

// var max = reduce(arr, function(prev, corr){
//     return Math.max(prev, corr)
// }, 0)

// console.log(max)

// var min = reduce(arr, function(prev, corr){
//     return Math.min(prev, corr)
// }, arr[0])

// console.log(min)

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// var arr2 = arr.reduce(function (prev, corr) {
//   return corr
// })

// console.log(arr)
// console.log(arr2)

// function reduce(arr) {
//     var firsValue = arr[0]
//     var lastValue = []
//     for (var i = 0; i < arr.length; i++){
//         lastValue = arr[i]
//     }
//     return firsValue + lastValue

// }

// var result = reduce(arr)
// console.log(result);

// example 1
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function myReduce(arr) {
//     return function () {
//         var result = 1
//         for (var i = 0; i < arr.length; i++) {
//             result += arr[i]
//         }
//         return result
//     }
// }
// var res = myReduce(arr)()
// console.log(res)

// // example 2
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// var jog = function (arr, callBack) {
//     var res = 0
//     for (var i = 0; i < arr.length; i++) {
//         if (i == 0) {
//             res = arr[0]
//         }
//         if (i != 0) {
//             res = callBack(res, arr[i])
//         }
//     }
//     return res
// }
// var res = jog(arr, function (a, b) {
//     return a + b
// })
// console.log(res)
// // it's work like reduce
// // example 3
// var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function reduced(arr, callbck) {
//     var Value,
//         x = 0
//     Value = callbck(arr.shift(), arr.shift())

//     while (arr.length != 0) {
//         x = callbck(Value, arr.shift())
//         Value = x
//     }
//     return Value
// }

// console.log(
//     reduced(arr1, function (a, b) {
//         return a
//     })
// )
