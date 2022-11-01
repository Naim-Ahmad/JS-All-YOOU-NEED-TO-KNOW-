// // rest এবং spread উভয়তই একই রকম সেটা হল ... এটা যদি প্যারামিটার এর মধ্যে ব্যয়ভার হয় তাহলে সেটাকে rest অপারেটর বলে এবং বাকি জায়গাতে এটাকে spread অপারেটর বলে।

// // Summation unlimited number

// // by arguments

// // function sum() {
// //     var sum = 0

// //     for (let i = 0; i < arguments.length; i++){
// //         sum += arguments[i]
// //     }

// //     return sum
// // }

// // console.log(sum(1, 2, 3, 4, 5))

// // by rest oprarator
// function sum(...rest) {
//     return rest.reduce((a, b) => a + b ) // here i can use Method of array
// }

// console.log(sum(1, 2, 3, 4, 5))


// function sum(...rest) {
//     // console.log(arguments)
//     return rest.reduce((a, b) => a + b)
    
// }


// console.log(sum(10, 20, 30))


// Spread Oparetor

// let arr = ['korim', 'rohim', 'hasan']

// // console.log(arr)

// console.log(...arr)

// let Obj = {
//     p1: 'Habib',
//     p2: 'rahib',
//     p3: 'rased'
// }

// console.log(...Obj)

// let createObj = Object.create(Obj) // object কে এভাবে clone করা যায় । কিন্তু ES6 এ স্প্রেড অপারেটর এসেছে।

// let Obj2 = {
//     ...Obj
// } // object কে clone করতে আমরা স্প্রেড অপারেটর ব্যয়ভার করব। 

// console.log(Obj)
// console.log(Obj2)
// console.log(createObj)

// Obj2.p4 = 'akram'
// console.log(Obj2)


// let objec = {
//     p1: 'nayem',
//     p2: 'maliha',
//     p3: 'manha'
// }

// let objec2 = objec

// objec2.p4 = 'akram'

// console.log(objec)
// console.log(objec2)

// এই সমস্যা সমাধানের জন্য এসেছে স্প্রেড অপারেটর







