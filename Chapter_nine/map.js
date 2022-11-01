// Map Function

var arr = [1, 2, 3, 4, 5, 6, 7]

// var newArr = []
// var newArr = arr.map(function(value){
//     return Math.random() * 100
//     // return value * 5
// })
// console.log(arr)
// console.log(newArr)

function map(arr, cb){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
       var temp = cb(arr[i])
       newArr.push(temp)
    }
    return newArr
}

var multiple = map(arr, function(value){
    return value * value
})
console.log(multiple)

var sum = map(arr, function(value){
    return value + value
})

console.log(sum)

var sub = map(arr, function(value){
    return value - 1
})

console.log(sub)

