/*
Constructor হল ঐ ফাংশন যেটার উপরে বেজ করে যে কোনো কিছু (Object) তৈরি হয় যেমন অবজেক্ট স্ট্রিং, নাম্বার ইত্যাদি এগুলোর প্রত্যেকটির একটি constructor আছে। কারন এগুলো প্রত্যেকটি এক একটি অবজেক্ট।
*/
// var str = new String('string')
// console.log('constructor ' + str);

// var func = new Function('name', 'prossesor', 'ram','storege', `this.name = name
// this.prossesor = prossesor
// this.ram = ram
// this.storege = storege

// this.fast = function () {
//     console.log('The ' + name + ' is very fast');
// }`)

// var laptop = new func('HP EliteBook 840 G3', 'Intel Core I5 5300u', '8 GB DDR4', '256 SSD')

// console.log(laptop);


// var str = new String('Nayem')
// var str1 = 'Nayem'

// console.log(str);
// console.log(str1);


// let obj = {
//   a: 10,
//   b: 20
// }

// console.log(obj.constructor)

// let str = new String('hello')
// console.log(str.constructor)

// console.log(str.constructor === strLiteral.constructor)

// function myFunc() {
//   let i = 0
//   return i
// }

// console.dir(myFunc.constructor)


// let functionConstructor = new Function("width", 'height', `
// this.width = width
// this.height = height

// this.draw = function(){
//   console.log('My width id ' + this.width)
//   console.log('My height id ' + this.height)
// }
// `)

// let rect = new functionConstructor(10, 20)
// rect.draw()
