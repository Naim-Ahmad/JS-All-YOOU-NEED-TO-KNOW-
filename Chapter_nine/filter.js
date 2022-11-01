// var arr = [1, 2, 3, 4, 5, 6, 8, 9, 35, 7, 22, 33, 44, 55]

// // var filterdArr = arr.filter(function(value){
// //     return value % 2 === 1
// // })
// // console.log(arr)
// // console.log(filterdArr)

// function filter(arr, cb){
//     var newArr = []
//     for(var i = 0; i < arr.length; i++){
//         if(cb(arr[i])){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(filter(arr, function(value){
//     return value % 2 === 0
// }))
// console.log(filter(arr, function(value){
//     return value % 2 === 1
// }))

// console.log(filter(arr, function(value){
//     return value > 5
// }))

// var arr = [1, 2, 3, 4, 5]

// var storeFilter = arr.filter(function (value) {
//     return value % 2 === 0
// })

// console.log(storeFilter);

// function filter(arr, cb) {
//   var storeArr = []
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       storeArr.push(arr[i])
//     }
//   }
//   return storeArr
// }

// var storeFilter = filter(arr, (value) => value % 2 === 0)

// console.log(storeFilter);


var arr = [
  {
    name: 'asadul',
    age: 20
  },

  {
    name: 'Tawhid',
    age: 25
  },

  {
    name: 'Habibullah',
    age: 22
  }

]


// var store = arr.filter(function (value) {
//   return value.age > 20
// })

// console.log(store);

// function filter(arr, cb) {
//   var temp = []
//   for (var i = 0; i < arr.length; i++){
//     if (cb(arr[i])) {
//       temp.push(arr[i])
//     }
//   }
//   return temp
// }


// var store = filter(arr, function (value) {
//   return value.age > 20
// })

// console.log(store);

var num = [3, 30, 25, 24, 55, 56, 100, 16]

function filter(arr, cb) {
  var temp = []
  for (var i = 0; i < arr.length; i++){
    if (cb(arr[i])) {
      temp += arr[i]
    }
  }
  return temp
}

var result = filter(num, function (value) {
  return value > 30
})
console.log(result);
