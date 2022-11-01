/*
  new keyword মুলত ৩ টি কাজ করে
  ১। সে একটা empty object তৈরি করে। 
  ২। function কে ঐ Empty object এর সাথে bind করে দেয়।
  ৩। ফাংশন এর প্রটোটাইপ কালেক্ট করে ঐ ইমটি অবজেক্ট এর মধ্যে ঢুকিয়ে দেয়। 
*/


// var Rect = function (width, height) {
//   this.width = width
//   this.height = height

//   this.draw = function () {
//     console.log('I am a Rectangle')
//     console.log(`The width is ${this.width}`)
//     console.log(`The height is ${this.height}`)
//   }
// }
// var rect1 = new Rect(10, 5)
// rect1.draw()


// function myNew(constructor) {
//   let obj = {}
//   Object.setPrototypeOf(obj, constructor)
//   let arrgsArray = Array.prototype.slice.apply(arguments)
//   constructor.apply(obj, arrgsArray.slice(1))

//   return obj
// }
// let myRect = myNew(Rect, 100, 50)
// myRect.draw()

// let arr = Array
// console.dir(arr)