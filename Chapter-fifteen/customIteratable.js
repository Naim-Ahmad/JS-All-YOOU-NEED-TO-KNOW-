// Iteret by for loop for in loop for of loop

var myArr = [1, 2, 3, 4, 5]

// For loop
// for (var i = 0; i < myArr.length; i++) {
//     console.log(myArr[i])
// }

// by for in loop

// for(index in myArr) {
//     console.log(index)
// } // here show index of array

// for in loop

// for (element of myArr) {
//     console.log(element)
// }

// I iterate above an arr and here i iterate a string

let myStr = 'HM nayem'
// by for loop
// for (var i = 0; i < myStr.length; i++){
//     console.log(myStr[i])
// }

// here show index
// for (index in myStr) {
//     console.log(index)
// }

// for (element of myStr) {
//     console.log(element)
    
// }
// console.dir(myStr)

// let arr1 = [11, 12, 13, 14, 15]

// let iterate = arr1[Symbol.iterator]()

// console.log(iterate.next())

// console.log('some code')

// console.log(iterate.next())

// console.log(iterate.next())

// console.log(iterate.next())

// console.log(iterate.next())

// console.log(iterate.next())

let myNumber = 222


for (number in myNumber){
    console.log(myNumber)
}

// Custom Iteretable object

// let obj9={
//     start: 0,
//     end: 10,

//     [Symbol.iterator]: function () {

//         let correntValue = this.start
//         let self = this
//         return {
//             next() {
//                 return {
//                     done: correntValue > self.end,
//                     value: correntValue++
//                 }
//             }
//         }
//     }
// }

// // for (let i of obj9) {
// //     console.log(i)
// // }



// let n = 120

// function range(start, end, step) {
//   let counter = start
//   return {
//     [Symbol.iterator]: function () {
//       return {
//         next() {
//           if (counter <= end) {
//             const result = { done: false, value: counter }
//             counter += step
//             return result
//           }
//           return {done: true}
//         }
//       }
//     }
//   }
// }

// console.log([...range(1, 30, 2)])