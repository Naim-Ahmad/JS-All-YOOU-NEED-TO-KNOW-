// Symbol একটি প্রিমিটিভ datatype এটা একটি unic ডাটা তৈরি করে । এটা ২ টি data আলাদা আলাদা হয় এবং ২ টি কম্পেয়ার করলে false পাওয়া যায়। এবং এটি একটি অব্জেক এর মধ্যে রাখা যায়।

// let habit = Symbol()
// let Lt = Symbol()

// console.log(habit === Lt)

// console.log(habit)

// console.log(Lt)

// let habit1 = Symbol.for()
// let Lt1 = Symbol.for()

// console.log(habit1 === Lt1)

// let obj11 = {
//     [habit]: 20
// }

// console.log(obj11)

// String.prototype[Symbol.iterator] = function () {
//     let count = this.length;
//     return {
//         next() {
//             if (count > 0) {
//                 count--
//                 return { done: false,
//                     value: 'js'
//                 }
//             }
//             return {done: true}
//         }
//     }
// }

// let s = 'bangladesh'

// let iterator = s[Symbol.iterator]()

// console.log(iterator.next())

// console.dir(...'bangadesh')

// Number.prototype[Symbol.iterator] = function (number) {

//     return {
//         next() {
//             return {
//                 done: t,
//             }
//         }
//     }
// }
// let n = new Number(40,4)
// console.dir(n)

// let Str = new String('Hasan')
// let Strm =
//     console.dir(Str)

// console.log(this[print])

// function Itaratable(number) {
//     let i = 0
//     return {
//         next() {

//             return {
//                 done: i >= number.length,
//                 value: number[i++]
//             }
//         }
//     }
// }

// let arr = [5,7,8]

// let itarator = Itaratable(arr)

// console.log(itarator.next())
// console.log(itarator.next())
// console.log(itarator.next())
// console.log(itarator.next())
// console.log(itarator.next())
// console.log(itarator.next())
// console.log(itarator.next())
// console.log(itarator.next())

// আমি অনেক চেষ্টার পরে custom iterable object বানাতে পেরেছি।
//Ref. https://levelup.gitconnected.com/how-to-create-your-custom-iterables-in-javascript-6ddaf1b5201b

// let obj1 = {
//     a: 1,
//     b: 10,
// }

// Object.prototype[Symbol.iterator] = function () {
//     let ordered = Object.values(this)
//     let i = 0
//     return {
//         next: () => ({
//             done: i >= ordered.length,
//             value: ordered[i++],
//         }),
//     }
// }

// let iterator = obj1[Symbol.iterator]()

// console.log(iterator.next())
// console.log(iterator.next())

// // for (v of obj1) {
// //     console.log(v)
// // }

// let obj10 = {
//     a: "abid",
//     b: "belal",
// }

// let itarator1 = obj10[Symbol.iterator]()
// console.log(itarator1.next())
// console.log(itarator1.next())

// // এটা ভাল করে বুঝতে হবে।

// class Range {
//     constructor(start, end, step = 1) {
//         this.start = start
//         this.end = end
//         this.step = step
//     }

//     [Symbol.iterator]() {
//         let i = this.start
//         return {
//             next: () => {
//                 if (i > this.end) return { done: true }
//                 const value = i
//                 i += this.step
//                 return { value }
//             },
//         }
//     }
// }

// const range = new Range(1, 5)

// for (const n of range) {
//     console.log(n)
// }

// // prints 1, 2, 3, 4, 5

// const range2 = new Range(10, 20, 2)

// console.log([...range2])

// // prints [10, 12, 14, 16, 18, 20]


// function* genarator() {
//     yield 'hasan'
//     yield 'nayem'
//     yield 'ali'
// }


// let iterata = genarator()

// console.log(iterata.next())
// console.log(iterata.next())
// console.log(iterata.next())
// console.log(iterata.next())